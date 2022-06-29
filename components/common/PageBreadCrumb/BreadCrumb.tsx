import React from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type BreadCrumbProps = {
  listItems: React.ReactNode[],
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({listItems=[]}) => {

  const breadCrumbStyle = {
    '& .MuiBreadcrumbs-separator': {
      margin: 'unset',
    }
  }

  const breadcrumbs = [
    <Link key="1" color="inherit" href="/">
      <Typography fontSize={'12px'} color="primary" fontWeight={600}>
        Dashboard
      </Typography>
    </Link>,
    ...listItems
  ];
  return (
    <Box mb={1.5}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={breadCrumbStyle}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
