const mongoose = require('mongoose');
// Setup schema
const kpiSchema = mongoose.Schema({
  overall_sales: {
    type: String,
    required: true
  },
  overall_sales_goal: {
    type: String,
    required: true
  },
  overall_transactions: {
    type: String,
    required: true
  },
  overall_transactions_goal: {
    type: String,
    required: true
  },
  aov: {
    type: String,
    required: true
  },
  aov_goal: {
    type: String,
    required: true
  },
  total_spend: {
    type: String,
    required: true
  },
  new_cust_cac: {
    type: String,
    required: true
  },
  spend_vs_sales: {
    type: String,
    required: true
  },
  web_sessions: {
    type: String,
    required: true
  },
  web_sessions_goal: {
    type: String,
    required: true
  },
  conv_rate: {
    type: String,
    required: true
  },
  conv_rate_goal: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export Kpi model
var Kpi = (module.exports = mongoose.model('kpi', kpiSchema));
module.exports.get = function(callback, limit) {
  Kpi.find(callback).limit(limit);
};
