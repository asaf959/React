const pageTitle = (title, customTitle) => {
  document.title = title;

  return customTitle ?? title;
};

export default pageTitle;
