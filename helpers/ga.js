export const GA_ID = 'UA-105150509-2';

export const trackPageView = url => {
  try {
    // eslint-disable-next-line
    window.gtag('config', GA_ID, {
      page_location: url,
    });
  } catch (error) {
    // silence possible errors
  }
};
