import React from "react";
import { Chip, Stack } from "@mui/material";
export default function Filters({
  categories,
  setCategories,
  selectedCategories,
  setSelectedCategories,
  setCurrentPage,
}) {
  const onAddCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
    setCategories(categories.filter((c) => c !== category));
    setCurrentPage(1);
  };

  const onDeleteCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
    setCategories([...categories, category]);
    setCurrentPage(1);
  };

  return (
    <Stack direction="row" spacing={1} className="filters">
      {selectedCategories.map((c, index) => (
        <Chip
          key={index}
          label={c}
          clickable
          color="primary"
          onDelete={() => onDeleteCategory(c)}
        />
      ))}
      {categories.map((c, index) => (
        <Chip
          key={index}
          label={c}
          clickable
          onClick={() => onAddCategory(c)}
        />
      ))}
    </Stack>
  );
}
