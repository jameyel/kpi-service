// Import kpi model
const Kpi = require('./kpi-model');

// Handle index actions
exports.index = function(req, res) {
  Kpi.get(function(err, kpis) {
    console.log(kpis);
    if (err) {
      res.json({
        status: 'error',
        message: err
      });
    }
    res.json({
      status: 'success',
      message: 'Kpis retrieved successfully',
      data: kpis
    });
  });
};

// Handle create kpi actions
exports.new = function(req, res) {
  var kpi = new Kpi();
  kpi.overall_sales = req.body.overall_sales;
  kpi.overall_sales_goal = req.body.overall_sales_goal;
  kpi.overall_transactions = req.body.overall_transactions;
  kpi.overall_transactions_goal = req.body.overall_transactions_goal;
  kpi.aov = req.body.aov;
  kpi.aov_goal = req.body.aov_goal;
  kpi.total_spend = req.body.total_spend;
  kpi.new_cust_cac = req.body.new_cust_cac;
  kpi.web_sessions = req.body.web_sessions;
  kpi.web_sessions_goal = req.body.web_sessions_goal;
  kpi.spend_vs_sales = req.body.spend_vs_sales;
  kpi.conv_rate = req.body.conv_rate;
  kpi.conv_rate_goal = req.body.conv_rate_goal;
  // save the kpi and check for errors
  kpi.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: 'New kpi created!',
      data: kpi
    });
  });
};

// Handle view kpi info
exports.view = function(req, res) {
  Kpi.findById(req.params.kpi_id, function(err, kpi) {
    if (err) res.send(err);
    res.json({
      message: 'Kpi details loading..',
      data: kpi
    });
  });
};

// Handle update kpi info
exports.update = function(req, res) {
  Kpi.findById(req.params.kpi_id, function(err, kpi) {
    if (err) res.send(err);
    kpi.overall_sales = req.body.overall_sales;
    kpi.overall_sales_goal = req.body.overall_sales_goal;
    kpi.overall_transactions = req.body.overall_transactions;
    kpi.overall_transactions_goal = req.body.overall_transactions_goal;
    kpi.aov = req.body.aov;
    kpi.aov_goal = req.body.aov_goal;
    kpi.total_spend = req.body.total_spend;
    kpi.new_cust_cac = req.body.new_cust_cac;
    kpi.web_sessions = req.body.web_sessions;
    kpi.web_sessions_goal = req.body.web_sessions_goal;
    kpi.spend_vs_sales = req.body.spend_vs_sales;
    kpi.conv_rate = req.body.conv_rate;
    kpi.conv_rate_goal = req.body.conv_rate_goal;
    // save the kpi and check for errors
    kpi.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: 'Kpi Info updated',
        data: kpi
      });
    });
  });
};

// Handle delete kpi
exports.delete = function(req, res) {
  console.log(req);
  Kpi.remove(
    {
      _id: req.params.kpi_id
    },
    function(err, kpi) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Kpi deleted'
      });
    }
  );
};
