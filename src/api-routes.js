// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
  res.json({
    status: 'API is Working',
    message: 'Welcome to KPI Service crafted with love!'
  });
});

// Import kpi controller
var kpiController = require('./kpi-controller');

// KPI routes
router
  .route('/kpis')
  .get(kpiController.index)
  .post(kpiController.new);
router
  .route('/kpis/:kpi_id')
  .get(kpiController.view)
  .patch(kpiController.update)
  .put(kpiController.update)
  .delete(kpiController.delete);
// Export API routes
module.exports = router;
