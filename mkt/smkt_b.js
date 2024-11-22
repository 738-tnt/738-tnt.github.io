const deliveryData = {"cacheVersion":"1.2.17","deliveryData":{"deliveryDetailsInfo":{"__typename":"DeliveryDetailsInfo","additionalInfo":"","address":"","addressLine1":"","addressLine2":null,"city":"Vaasa","deliveryDate":"2024-11-27","deliveryMethod":"PICKUP","deliveryTime":"10.00","deliverySlotId":"2024-11-27:2c4513e9-71b1-4331-a810-436286223bed","postalCode":"65320","location":null,"deliverySlotPrice":6.9},"selectedAreaId":"7fe64d66-11c4-46d4-937b-f2ec3bd1afd0"}}
const deliveryState = {"searchInput":"vaasa","address":{"title":"S-market Gerby noutolokero","street":"Västervikintie 2","postalCode":"65280","city":"Vaasa","location":{"latitude":63.13096,"longitude":21.6029}},"method":"PICKUP"}
const storeData = {"cacheVersion":"1.2.17","storeData":{"deliveryStore":{"__typename":"DeliveryStore","brand":"s-market","id":"639126291","name":"S-market Gerby","areaId":"3cd711ea-89b6-44ec-8a97-3ec33e709fbf"},"storeId":"639126291","selectedBrand":"s-market"}}

localStorage.setItem("delivery-data", JSON.stringify(deliveryData))
localStorage.setItem("delivery-state", JSON.stringify(deliveryState))
localStorage.setItem("store-data", JSON.stringify(storeData))
