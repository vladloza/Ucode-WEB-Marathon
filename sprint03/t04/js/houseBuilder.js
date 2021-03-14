let houseBlueprint = {
    address: "house address", 
    date: new Date(),
    description: "Describe the house",
    owner: "House owner",
    size: Number.NaN,
    roomCount: Number.NaN,
    _averageBuildSpeed: Number.NaN,
    getDaysToBuild: function() {
        return this.size/this._averageBuildSpeed;
    }
}
let houseBuider = function(address="", date=new Date(), description="",owner="", size = 0, roomCount = 0, _averageBuildSpeed = 0.5) {
    let res = Object.create(houseBlueprint);
    res.address = address;
    res.date = date;
    res.description = description;
    res.owner = owner;
    res.size = size;
    res.roomCount = roomCount;
    res._averageBuildSpeed = _averageBuildSpeed;
    return res;
}