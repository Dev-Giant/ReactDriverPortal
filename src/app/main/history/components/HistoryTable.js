import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  Icon,
  Input,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import ButtonsGroup from "./ButtonsGroup";

const SearchBox = styled("div")(({ theme }) => ({
  display: "flex",
  background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
  backgroundSize: "cover",
  backgroundColor: theme.palette.primary.dark,
}));

function createData(trip_no, pickup, delivery, mileage, tags, more) {
  return {
    trip_no,
    pickup,
    delivery,
    mileage,
    tags,
    more,
  };
}

const originRows = [
  createData(
    "1234123",
    "Street1",
    "Street2",
    "Random",
    "tag1, tag2",
    "Specific"
  ),
  createData(
    "1234121",
    "Street1",
    "Street3",
    "Random",
    "tag2, tag3",
    "Specific"
  ),
  createData(
    "1234126",
    "Street1",
    "Street4",
    "Random",
    "tag3, tag4",
    "Specific"
  ),
  createData(
    "1234127",
    "Street1",
    "Street5",
    "Random",
    "tag4, tag5",
    "Specific"
  ),
  createData(
    "1234128",
    "Street1",
    "Street6",
    "Random",
    "tag5, tag6",
    "Specific"
  ),
  createData(
    "1234129",
    "Street1",
    "Street7",
    "Random",
    "tag6, tag7",
    "Specific"
  ),
  createData(
    "1234120",
    "Street1",
    "Street8",
    "Random",
    "tag7, tag8",
    "Specific"
  ),
  createData(
    "1234134",
    "Street1",
    "Street9",
    "Random",
    "tag8, tag9",
    "Specific"
  ),
  createData(
    "1234135",
    "Street2",
    "Street1",
    "Random",
    "tag9, tag0",
    "Specific"
  ),
  createData(
    "1234136",
    "Street2",
    "Street3",
    "Random",
    "tag1, tag2",
    "Specific"
  ),
  createData(
    "1234137",
    "Street2",
    "Street4",
    "Random",
    "tag2, tag3",
    "Specific"
  ),
  createData(
    "1234138",
    "Street2",
    "Street5",
    "Random",
    "tag3, tag4",
    "Specific"
  ),
  createData(
    "1234139",
    "Street2",
    "Street6",
    "Random",
    "tag4, tag5",
    "Specific"
  ),
  createData(
    "1234140",
    "Street2",
    "Street7",
    "Random",
    "tag5, tag6",
    "Specific"
  ),
  createData(
    "1234141",
    "Street2",
    "Street8",
    "Random",
    "tag6, tag7",
    "Specific"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "trip_no",
    numeric: false,
    disablePadding: true,
    label: "Trip No",
  },
  {
    id: "pickup",
    numeric: false,
    disablePadding: false,
    label: "Pick Up",
  },
  {
    id: "delivery",
    numeric: false,
    disablePadding: false,
    label: "Delivery",
  },
  {
    id: "mileage",
    numeric: false,
    disablePadding: false,
    label: "Mileage",
  },
  {
    id: "tags",
    numeric: false,
    disablePadding: false,
    label: "Tags",
  },
  {
    id: "more",
    numeric: false,
    disablePadding: false,
    label: "More",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          History
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function HistoryTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("pickup");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState("");
  const [rows, setRows] = React.useState(originRows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    var searchkey = event.target.value;
    const newRows = rows.filter((item) => {
      if (
        item.trip_no.toLowerCase().includes(searchkey.toLowerCase()) ||
        item.pickup.toLowerCase().includes(searchkey.toLowerCase()) ||
        item.delivery.toLowerCase().includes(searchkey.toLowerCase()) ||
        item.mileage.toLowerCase().includes(searchkey.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchkey.toLowerCase()) ||
        item.more.toLowerCase().includes(searchkey.toLowerCase())
      ) {
        return item;
      }
    });
    setRows(newRows);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <Box className="flex flex-row-reverse mb-16">
        <SearchBox className="flex w-full align-right items-center">
          <div className="flex flex-1 items-center justify-between p-4 sm:p-24">
            <div className="flex flex-1 items-center justify-center px-8 sm:px-12">
              <Paper
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex p-4 items-center w-full max-w-512 h-48 px-16 py-4 shadow"
              >
                <Icon color="action">search</Icon>

                <Input
                  placeholder="Search for anything"
                  className="flex flex-1 px-16"
                  disableUnderline
                  fullWidth
                  value={search}
                  inputProps={{
                    "aria-label": "Search",
                  }}
                  onChange={handleSearch}
                />
              </Paper>
            </div>
          </div>
        </SearchBox>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.trip_no}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.trip_no}
                        </TableCell>
                        <TableCell>{row.pickup}</TableCell>
                        <TableCell>{row.delivery}</TableCell>
                        <TableCell>{row.mileage}</TableCell>
                        <TableCell>{row.tags}</TableCell>
                        <TableCell>{row.more}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Box className="w-full flex justify-between">
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
          <Box className="hidden md:block">
            <ButtonsGroup />
          </Box>
        </Box>
      </Box>
    </>
  );
}
