export const createButtonNumbers = (currentPage, totalPages) => {
  currentPage = Number(currentPage);
  totalPages = Number(totalPages);

  const buttonCount = 5,
    halfPages = Math.round(totalPages / 2),
    leftSide = [],
    rightSide = [];

  if (totalPages <= buttonCount) {
    for (let i = 1; i <= totalPages; i++) {
      leftSide.push(i);
    }
  } else if (currentPage < halfPages) {
    const startPage = currentPage === 1 ? 1 : currentPage - 1;

    for (let i = startPage; i < startPage + buttonCount; i++) {
      leftSide.push(i);
    }

    rightSide.push(totalPages);
  } else {
    let startPage = currentPage - buttonCount + 1 > 1 ? currentPage - buttonCount + 1 : 2;
    let lastPage = totalPages;

    if (currentPage !== totalPages) {
      lastPage = currentPage + 1;
      startPage++;
    }

    for (let i = startPage; i <= lastPage; i++) {
      rightSide.push(i);
    }

    leftSide.push(1);
  }

  return [leftSide, rightSide];
};
