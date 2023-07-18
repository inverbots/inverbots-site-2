import FacebookPixel from 'facebook-pixel';
const pixelId = "YOUR_PIXEL_ID";
const accessToken = "YOUR_ACCESS_TOKEN";

const pixel = new FacebookPixel(pixelId, accessToken);


function fcbClicEvent(element) {
  pixel.sendEvent({
    event_name: 'Click',
    event_category: 'Button',
    event_label: element.id,
  });
}

