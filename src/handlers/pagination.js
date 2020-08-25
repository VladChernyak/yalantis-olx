export const createButtonNumbers = (currentPage, totalPages) => {
  const buttonCount = 4,
    leftSide = [],
    rightSide = [];

  if (totalPages <= buttonCount) {
    for (let i = 1; i <= totalPages; i++) {
      leftSide.push(i);
    }
  } else if (currentPage < totalPages / 2) {
    for (let i = currentPage; i < currentPage + buttonCount; i++) {
      leftSide.push(i);
    }

    rightSide.push(totalPages);
  } else {
    for (let i = totalPages - buttonCount + 1; i <= totalPages; i++) {
      rightSide.push(i);
    }

    leftSide.push(1);
  }

  return [leftSide, rightSide];
};
