import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

/*
 * Table - a component which allows to create simple tables, but only simple. For advanced tables use something like react-table or Mui Data-Grid
 *
 * 1. We have <TableContainer /> as wrapper to the whole table, <Table /> as entry point for table parts, <TableHead /> and <TableBody />, and of course we have <TableRow /> and <TableCell />
 * 2. We can make <TableHead /> sticky if we specify stickyHeader for <Table />
 * 3. <Table /> and its subcomponents also have a lot of other props like size, align etc.
 * */

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ m: 4, maxHeight: 500, width: '90%' }}>
      <Table stickyHeader aria-label="Users table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Cob',
    last_name: 'Sisse',
    email: 'csisse0@nyu.edu',
    gender: 'Male',
    ip_address: '179.11.244.252',
  },
  {
    id: 2,
    first_name: 'Leigh',
    last_name: 'Ruttgers',
    email: 'lruttgers1@example.com',
    gender: 'Male',
    ip_address: '63.6.242.249',
  },
  {
    id: 3,
    first_name: 'Ronna',
    last_name: 'Dreinan',
    email: 'rdreinan2@prnewswire.com',
    gender: 'Female',
    ip_address: '111.233.190.134',
  },
  {
    id: 4,
    first_name: 'Joyce',
    last_name: 'Stansall',
    email: 'jstansall3@comsenz.com',
    gender: 'Female',
    ip_address: '144.31.69.198',
  },
  {
    id: 5,
    first_name: 'Ben',
    last_name: 'Hiscocks',
    email: 'bhiscocks4@nasa.gov',
    gender: 'Male',
    ip_address: '33.108.130.204',
  },
  {
    id: 6,
    first_name: 'Antoni',
    last_name: 'Brezlaw',
    email: 'abrezlaw5@census.gov',
    gender: 'Male',
    ip_address: '163.219.214.154',
  },
  {
    id: 7,
    first_name: 'Miltie',
    last_name: 'Fenn',
    email: 'mfenn6@examiner.com',
    gender: 'Male',
    ip_address: '24.58.63.92',
  },
  {
    id: 8,
    first_name: 'Alastair',
    last_name: 'Blackater',
    email: 'ablackater7@amazon.com',
    gender: 'Male',
    ip_address: '4.232.18.133',
  },
  {
    id: 9,
    first_name: 'Simon',
    last_name: 'Croneen',
    email: 'scroneen8@dropbox.com',
    gender: 'Male',
    ip_address: '52.161.30.52',
  },
  {
    id: 10,
    first_name: 'Clerc',
    last_name: 'Boddington',
    email: 'cboddington9@indiegogo.com',
    gender: 'Male',
    ip_address: '150.136.12.244',
  },
  {
    id: 11,
    first_name: 'Teressa',
    last_name: 'Pickin',
    email: 'tpickina@army.mil',
    gender: 'Female',
    ip_address: '98.60.254.187',
  },
  {
    id: 12,
    first_name: 'Karee',
    last_name: 'Wyles',
    email: 'kwylesb@uiuc.edu',
    gender: 'Female',
    ip_address: '221.83.116.37',
  },
  {
    id: 13,
    first_name: 'Sandye',
    last_name: 'Goor',
    email: 'sgoorc@elpais.com',
    gender: 'Female',
    ip_address: '68.38.133.55',
  },
  {
    id: 14,
    first_name: 'Ermanno',
    last_name: 'Halshaw',
    email: 'ehalshawd@clickbank.net',
    gender: 'Agender',
    ip_address: '174.103.62.187',
  },
  {
    id: 15,
    first_name: 'Dru',
    last_name: 'Edgson',
    email: 'dedgsone@wix.com',
    gender: 'Male',
    ip_address: '135.255.255.33',
  },
  {
    id: 16,
    first_name: 'Bertrando',
    last_name: 'Arons',
    email: 'baronsf@businessinsider.com',
    gender: 'Male',
    ip_address: '222.74.165.253',
  },
  {
    id: 17,
    first_name: 'Maynard',
    last_name: 'Warlock',
    email: 'mwarlockg@i2i.jp',
    gender: 'Male',
    ip_address: '75.157.7.201',
  },
  {
    id: 18,
    first_name: 'Knox',
    last_name: 'Lawland',
    email: 'klawlandh@bbc.co.uk',
    gender: 'Polygender',
    ip_address: '146.145.195.64',
  },
  {
    id: 19,
    first_name: 'Nicolas',
    last_name: 'Longlands',
    email: 'nlonglandsi@hc360.com',
    gender: 'Male',
    ip_address: '65.50.222.95',
  },
  {
    id: 20,
    first_name: 'Goldy',
    last_name: 'Cuolahan',
    email: 'gcuolahanj@techcrunch.com',
    gender: 'Female',
    ip_address: '128.178.212.252',
  },
];
