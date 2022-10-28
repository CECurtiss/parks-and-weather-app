function getparkcode() {
Storage.getitem(parkcode)
    var parkcodesearch = storage.getitem(parkcode)
    var parkcodeUrl = ('https://developer.nps.gov/api/v1/parks?parkCode=' + parkCodeSearch + '&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy')

    fetch(parkcodeUrl)

    .then (function(response) {
        return respomse.json() ;
    })
    .then (function(data) {
        console.log(data);
    }
}
