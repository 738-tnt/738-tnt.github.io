window.onload = function() {
  document.getElementById('checkoutbutton').style.display = 'none';
  const checkoutButton = document.querySelector('[data-test-id="checkout-button"]');
      if (checkoutButton) {
        checkoutButton.style.display = 'none';
      }
}


localStorage.setItem('uc_user_interaction', 'true');

localStorage.setItem('store-data', JSON.stringify({
  "cacheVersion": "1.2.17",
  "storeData": {
    "deliveryStore": {
      "__typename": "DeliveryStore",
      "brand": "prisma",
      "id": "518636626",
      "name": "Prisma Kotiranta Vaasa",
      "areaId": "80761da3-d935-4fbf-9431-11fbe198446d"
    },
    "storeId": "518636626",
    "selectedBrand": "prisma"
  }
}));

localStorage.setItem('uc_ui_version', '3.41.0');
localStorage.setItem('select-store-hint', 'true');

localStorage.setItem('persistedSessionId-mSsCwhaaz', '06c4b30e-c1ec-4c60-bac3-e55e0d300b04');

localStorage.setItem('payment-data', JSON.stringify({
  "cacheVersion": "1.2.17",
  "paymentData": {
    "paymentDetails": {
      "__typename": "PaymentDetailsResponse",
      "paymentMethod": "CARD_PAYMENT",
      "isPaymentMethodModifiable": true,
      "invoiceNumber": null,
      "invoiceDetails": null,
      "paymentStatus": null,
      "selectedPaymentCardId": null,
      "savePaymentCard": false,
      "cardholderDetails": null
    }
  }
}));

localStorage.setItem('delivery-data', JSON.stringify({
  "cacheVersion": "1.2.17",
  "deliveryData": {
    "deliveryDetailsInfo": {
      "__typename": "DeliveryDetailsInfo",
      "additionalInfo": "",
      "address": "",
      "addressLine1": "",
      "addressLine2": null,
      "city": "Vaasa",
      "deliveryDate": "2024-11-26",
      "deliveryMethod": "PICKUP",
      "deliveryTime": "9.00",
      "deliverySlotId": "2024-11-26:4c20c9cd-76a1-4214-85f3-d06f1e82473e",
      "postalCode": "65280",
      "location": null,
      "deliverySlotPrice": 4.9
    },
    "selectedAreaId": "80761da3-d935-4fbf-9431-11fbe198446d"
  }
}));

localStorage.setItem('persistedSessionId-wzZweLjrI', '2416545c-8bc3-4c11-a4a1-45ff06e90dca');
localStorage.setItem('lastExternalReferrer', 'empty');

localStorage.setItem('uc_settings', JSON.stringify({
  "controllerId": "6381ec91219f323a40a425bb8f9677d0b8e0b327a36f0bab2f25e7002c69a284",
  "id": "aqiBiX3PA1ivX0",
  "language": "fi",
  "services": [
    {
      "history": [
        {
          "action": "onAcceptAllServices",
          "language": "fi",
          "status": true,
          "timestamp": 1732275974402,
          "type": "explicit",
          "versions": {
            "application": "SDK-4.35.0",
            "service": "6.2.0",
            "settings": "42.16.81"
          }
        }
      ],
      "id": "GkxomOJSe",
      "processorId": "5da5ba6d486b303344389b38712b0a699625af8cdb9b50b1b81000f834bb3f45",
      "status": true
    },
    {
      "history": [
        {
          "action": "onAcceptAllServices",
          "language": "fi",
          "status": true,
          "timestamp": 1732275974402,
          "type": "explicit",
          "versions": {
            "application": "SDK-4.35.0",
            "service": "6.1.0",
            "settings": "42.16.81"
          }
        }
      ],
      "id": "x5XFlRncB",
      "processorId": "d7a895522e79317ac9c3920778fe07bec926367f60d21071c64c661b9fbf945c",
      "status": true
    }
  ]
}));

localStorage.setItem('lastExternalReferrerTime', '1732278339482');

localStorage.setItem('cart-data', JSON.stringify({
  "cacheVersion": "1.2.17",
  "cart": {
    "cartItems": [
      {
        "__typename": "ClientCartItem",
        "id": "2000503600002",
        "ean": "2000503600002",
        "name": "Chiquita banaani",
        "itemCount": 1,
        "approxPrice": true,
        "basicQuantityUnit": "KPL",
        "inStoreSelection": true,
        "mainCategoryName": "Hedelmät ja vihannekset",
        "price": 0.33,
        "priceUnit": "KPL",
        "quantityMultiplier": 1,
        "replace": true,
        "countryName": {
          "fi": "Costa Rica, Panama",
          "__typename": "CountryName"
        },
        "productType": "PRODUCT",
        "campaignPrice": null,
        "lowest30DayPrice": null,
        "campaignPriceValidUntil": null,
        "regularPrice": 0.33,
        "additionalInfo": "",
        "isAgeLimitedByAlcohol": false,
        "frozen": false,
        "packagingLabelCodes": [],
        "comparisonPrice": 1.89,
        "comparisonUnit": "KGM",
        "isForceSalesByCount": false
      }
    ],
    "orderEditActive": null
  }
}));

localStorage.setItem('delivery-state', JSON.stringify({
  "searchInput": "vaasa",
  "address": {
    "title": "S-market Gerby noutolokero",
    "street": "Västervikintie 2",
    "postalCode": "65280",
    "city": "Vaasa",
    "location": {
      "latitude": 63.13096,
      "longitude": 21.6029
    }
  },
  "method": "PICKUP"
}));

localStorage.setItem('login-skip', 'true');
localStorage.setItem('scid', 'eed20591-c150-650a-0015-e7b0801eedd1');
localStorage.setItem('sidepanel_visibility', 'true');
