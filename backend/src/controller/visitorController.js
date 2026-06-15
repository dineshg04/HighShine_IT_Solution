const Visitor = require("../models/Visitor");



const logVisitor = async (req, res, next) => {
  try {
    const { page, referrer, country, timestamp } = req.body;

    if (!page || typeof page !== "string") {
      return res.status(400).json({
        success: false,
        error: "page is required and must be a string.",
      });
    }
    if (!country || typeof country !== "string" || country.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: "country is required and must be a full country name e.g. 'India'.",
      });
    }

    const visitor = await Visitor.create({
      page:      page.trim(),
      referrer:  referrer ? referrer.trim() : "direct",
      country:   country.trim(),
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Visitor event logged.",
      data: visitor,
    });
  } catch (err) {
    next(err);
  }
};



const getVisitorSummary = async (req, res, next) => {
  try {
    const byPage = await Visitor.aggregate([
      { $group: { _id: "$page", visits: { $sum: 1 } } },
      { $sort: { visits: -1 } },
      { $project: { _id: 0, page: "$_id", visits: 1 } },
    ]);

    const byCountry = await Visitor.aggregate([
      { $group: { _id: "$country", visits: { $sum: 1 } } },
      { $sort: { visits: -1 } },
      { $project: { _id: 0, country: "$_id", visits: 1 } },
    ]);

    const totalVisits = byPage.reduce((sum, p) => sum + p.visits, 0);

    res.status(200).json({
      success: true,
      data: { totalVisits, byPage, byCountry },
    });
  } catch (err) {
    next(err);
  }
};


const getVisitorTrend = async (req, res, next) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const trend = await Visitor.aggregate([
      { $match: { timestamp: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: {
            year:  { $year:  "$timestamp" },
            month: { $month: "$timestamp" },
            day:   { $dayOfMonth: "$timestamp" },
          },
          visits: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
      {
        $project: {
          _id: 0,
          date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: {
                $dateFromParts: {
                  year:  "$_id.year",
                  month: "$_id.month",
                  day:   "$_id.day",
                },
              },
            },
          },
          visits: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        period: "last_30_days",
        from: thirtyDaysAgo.toISOString().split("T")[0],
        to:   new Date().toISOString().split("T")[0],
        trend,
      },
    });
  } catch (err) {
    next(err);
  }
};






module.exports = { logVisitor, getVisitorSummary, getVisitorTrend } ; 
