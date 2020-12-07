import CommonServices from "./CommonService";

export default class TripHistoryServices extends CommonServices {

	postTripHistory(driverId = 0) {
    const QUERY = `
      query MyQuery {
        trips(where: {driver: {id: {_eq: "${driverId}"}}}) {
          created_time
          distance
          accepted_time
          driver_id
          dropped_time
          duration
        }
      }
    ` 
		return super.post({query: QUERY});
  }
}