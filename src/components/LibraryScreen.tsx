//@ts-nocheck
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./styles.css";
// Import the icon images
import pdfIcon from "../assets/icons/pdf.svg";
import jpgIcon from "../assets/icons/jpg.svg";
import mp4Icon from "../assets/icons/mp4.svg";
import figIcon from "../assets/icons/fig.svg";
import docxIcon from "../assets/icons/docx.svg";
import aepIcon from "../assets/icons/aep.svg";
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Icon style for display
const styles = {
  docIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  statusText: {
    padding: '2px 8px', // Adjust padding to make the oval tight around the text and circle
    border: '2px solid #ccc',
    borderRadius: '40px',
    display: 'inline-flex', 
    alignItems: 'center', 
    fontWeight: 'bold',
  },
  searchBox: {
    padding: '8px',
    width: '250px',
    marginRight: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  },
  header: {
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginTop: '8px',
  },
};

const getDocIcon = (type) => {
  switch (type) {
    case "PDF":
      return <img src={pdfIcon} alt="PDF" style={styles.docIcon} />;
    case "JPG":
      return <img src={jpgIcon} alt="JPG" style={styles.docIcon} />;
    case "MP4":
      return <img src={mp4Icon} alt="MP4" style={styles.docIcon} />;
    case "FIG":
      return <img src={figIcon} alt="FIG" style={styles.docIcon} />;
    case "DOCX":
      return <img src={docxIcon} alt="DOCX" style={styles.docIcon} />;
    case "AEP":
      return <img src={aepIcon} alt="AEP" style={styles.docIcon} />;
    default:
      return null; // Or a default icon if the type is not recognized
  }
};



export default function LibraryTable() {
  const [searchText, setSearchText] = useState(""); // State for search query
  const [page, setPage] = useState(0); // State for current page
  const [pageSize, setPageSize] = useState(15); // Number of rows per page
    
    // Calculate the current page rows to display
  // Sample rows with dataset data
const [rows, setRows] = useState([
    { id: 1, name: "Tech requirements.pdf", type: "PDF", status: "Uploaded", createdAt: "Jan 4, 2024", createdBy: "Olivia Rhye", email: "olivia@untitledui.com" },
    { id: 2, name: "Dashboard screenshot.jpg", type: "JPG", status: "Connected", createdAt: "Jan 4, 2024", createdBy: "Phoenix Baker", email: "phoenix@untitledui.com" },
    { id: 3, name: "Dashboard prototype recording.mp4", type: "MP4", status: "Connected", createdAt: "Jan 2, 2024", createdBy: "Lana Steiner", email: "lana@untitledui.com" },
    { id: 4, name: "Dashboard prototype FINAL.fig", type: "FIG", status: "Connected", createdAt: "Jan 6, 2024", createdBy: "Demi Wilkinson", email: "demi@untitledui.com" },
    { id: 5, name: "UX Design Guidelines.docx", type: "DOCX", status: "Connected", createdAt: "Jan 8, 2024", createdBy: "Candice Wu", email: "candice@untitledui.com" },
    { id: 6, name: "Dashboard interaction.aep", type: "AEP", status: "Error", createdAt: "Jan 6, 2024", createdBy: "Natali Craig", email: "natali@untitledui.com" },
    { id: 7, name: "Tech requirements.pdf", type: "PDF", status: "Uploaded", createdAt: "Jan 4, 2024", createdBy: "Olivia Rhye", email: "olivia@untitledui.com" },
    { id: 8, name: "Dashboard screenshot.jpg", type: "JPG", status: "Connected", createdAt: "Jan 4, 2024", createdBy: "Phoenix Baker", email: "phoenix@untitledui.com" },
    { id: 9, name: "Dashboard prototype recording.mp4", type: "MP4", status: "Connected", createdAt: "Jan 2, 2024", createdBy: "Lana Steiner", email: "lana@untitledui.com" },
    { id: 10, name: "Dashboard prototype FINAL.fig", type: "FIG", status: "Connected", createdAt: "Jan 6, 2024", createdBy: "Demi Wilkinson", email: "demi@untitledui.com" },
    { id: 11, name: "UX Design Guidelines.docx", type: "DOCX", status: "Connected", createdAt: "Jan 8, 2024", createdBy: "Candice Wu", email: "candice@untitledui.com" },
    { id: 12, name: "Dashboard interaction.aep", type: "AEP", status: "Error", createdAt: "Jan 6, 2024", createdBy: "Natali Craig", email: "natali@untitledui.com" },
    { id: 13, name: "Tech requirements.pdf", type: "PDF", status: "Uploaded", createdAt: "Jan 4, 2024", createdBy: "Olivia Rhye", email: "olivia@untitledui.com" },
    { id: 14, name: "Dashboard screenshot.jpg", type: "JPG", status: "Connected", createdAt: "Jan 4, 2024", createdBy: "Phoenix Baker", email: "phoenix@untitledui.com" },
    { id: 15, name: "Dashboard prototype recording.mp4", type: "MP4", status: "Connected", createdAt: "Jan 2, 2024", createdBy: "Lana Steiner", email: "lana@untitledui.com" },
    { id: 16, name: "Dashboard prototype FINAL.fig", type: "FIG", status: "Connected", createdAt: "Jan 6, 2024", createdBy: "Demi Wilkinson", email: "demi@untitledui.com" },
    { id: 17, name: "UX Design Guidelines.docx", type: "DOCX", status: "Connected", createdAt: "Jan 8, 2024", createdBy: "Candice Wu", email: "candice@untitledui.com" },
    { id: 18, name: "Dashboard interaction.aep", type: "AEP", status: "Error", createdAt: "Jan 6, 2024", createdBy: "Natali Craig", email: "natali@untitledui.com" },
    {
        "id": 19,
        "name": "random_file_name.pdf",
        "type": "PDF",
        "status": "Uploaded",
        "createdAt": "Jan 10, 2024",
        "createdBy": "Random User",
        "email": "random@email.com"
      },
      {
        "id": 20,
        "name": "another_file.jpg",
        "type": "JPG",
        "status": "Connected",
        "createdAt": "Jan 15, 2024",
        "createdBy": "Test User",
        "email": "test@test.com"
      },
    {
        "id": 21,
        "name": "video_presentation.mp4",
        "type": "MP4",
        "status": "Error",
        "createdAt": "Jan 20, 2024",
        "createdBy": "Demo User",
        "email": "demo@demo.com"
      },
    {
        "id": 22,
        "name": "design_draft.fig",
        "type": "FIG",
        "status": "Connected",
        "createdAt": "Jan 25, 2024",
        "createdBy": "Design User",
        "email": "design@design.com"
      },
    {
        "id": 23,
        "name": "document_v1.docx",
        "type": "DOCX",
        "status": "Uploaded",
        "createdAt": "Jan 30, 2024",
        "createdBy": "Doc User",
        "email": "doc@doc.com"
      },
    {
        "id": 24,
        "name": "animation_final.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 25,
        "name": "animation_final.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 26,
        "name": "animation_final.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 27,
        "name": "Finance_app.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 28,
        "name": "good_morning.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 29,
        "name": "wonderful.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      },
      {
        "id": 30,
        "name": "great_work.aep",
        "type": "AEP",
        "status": "Connected",
        "createdAt": "Feb 5, 2024",
        "createdBy": "Anim User",
        "email": "anim@anim.com"
      }
  ]);

  // Columns configuration for the DataGrid
  const columns = [
    {
      field: "name",
      headerName: "Dataset Name",
      width: 350,
      filterable: true,
      renderCell: (params : any) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {getDocIcon(params.row.type)} {/* Render the icon */}
          {params.value} {/* Render the dataset name */}
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      filterable: true,
      renderCell: (params : any) => {
        const statusStyle = params.value === "Error" 
        ? { backgroundColor: '#f9d6d6', color: '#7f1f1f' }  // Lighter red for Error
        : { backgroundColor: '#e3f9e5', color: '#2e7d32' }; 
    
        return (
            <div style={{ display: 'flow', alignItems: 'center' }}>
            <span
              style={{
                ...styles.statusText, // Use the statusText style defined above
                backgroundColor: statusStyle.backgroundColor, // Background for the oval
                color: statusStyle.color, 
                padding : "0.4rem",
                borderRadius: "0.75rem",
                fontSize:"13px",
                fontWeight: "600",
              }}
            >
              <CircleIcon
                style={{
                  color: statusStyle.color, // Circle color matches status color
                  fontSize: '8px',
                  marginRight: '6px', // Adjusted space between circle and text
                }}
              />
              {params.value} {/* Render the status text */}
            </span>
          </div>
        )
     }
    },
    { field: "createdAt", headerName: "Created At", width: 150 },
    {
        field: "createdBy",
        headerName: "Created By",
        width: 200,
        renderCell: (params : any) => {
            // Check if email exists for the row
            const createdBy = params.row.createdBy || "N/A";
            const email = params.row.email || "No email provided";
            return (
              <div style={{ display: "flex", flexDirection: "column", whiteSpace: "normal", margin: "10px" , lineHeight: 1.5,justifyContent:"center" }}>
                <span style={{ fontSize: "0.875rem", color: "#555" }}>{email}</span>
                <span style={{ fontSize: "0.875rem", color: "#555" }}>{createdBy}</span>
              </div>
            );
        },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: (params : any) => (
        <DeleteIcon
          style={{
            cursor: "pointer",
            color: "#cbcbcb",
          }}
          onClick={() => handleDelete(params.row.id)} // Handle delete action
        />
      ),
    },
  ];

  const handleDelete = (id : number) => {
    // Filter out the row with the given id
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  // Filter rows based on search text
// Search filter to update rows based on search input
const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.type.toLowerCase().includes(searchText.toLowerCase()) ||
      row.status.toLowerCase().includes(searchText.toLowerCase()) ||
      row.createdBy.toLowerCase().includes(searchText.toLowerCase()) || 
      row.createdAt.toLowerCase().includes(searchText.toLowerCase())
  );

   // Calculate the current page rows to display
   const currentPageRows = filteredRows.slice(page * pageSize, (page + 1) * pageSize);
   const totalRecords = rows.length; 
   // Calculate the range of records displayed
   const startIndex = page * pageSize + 1;
   const endIndex = Math.min((page + 1) * pageSize, filteredRows.length);
   // Handle "Next" button click
   const handleNext = () => {
     if ((page + 1) * pageSize < filteredRows.length) {
       setPage(page + 1);
     } else {
        alert("No more records found");
     }
   };

   const styles = {
    container: {
      position: "relative", 
      width: "75%",
      margin: "0.625rem 10rem 0.625rem 10rem",
      backgroundColor: "#FFFFFF",
      color: "#000000",
      padding: "1rem",
      borderRadius: "0.5rem",
      boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
    },
    header: {
      marginBottom: "1rem",
      textAlign: "left",
    },
    subtitle: {
      fontSize: "0.875rem",
      color: "#555555",
      margin: "-1.5rem 0 0.625rem 0",
    },
    searchBoxContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      margin: "1rem 0",
    },
    searchBox: {
      width: "20%",
      padding: "0.25rem 0.5rem 0.25rem 2.5rem",
      fontSize: "1rem",
      backgroundColor: "#FFFFFF",
      color: "#000000",
      border: "0.0625rem solid #CCCCCC",
      borderRadius: "0.6rem",
    },
    searchIcon: {
        position: "absolute",
        top: "50%",
        left: ".9rem",
        transform: "translateY(-50%)",
        fontSize: "16px",
        color: "#888888",
    },
    divider: {
        margin: "16px 0",
        border: "none",
        borderTop: "1px solid #CCCCCC",
    },
    closeIcon: {
        position: "absolute",
        top: "8px",
        right: "8px",
        fontSize: "24px",
        color: "#888888",
        cursor: "pointer",
        zIndex: 1,
    },
    dataGridContainer: {
        height: 500, width: '100%', overflowY: 'auto' 
    },
    buttonContainer: {
        position: "absolute",
        bottom: "20px",
        right: "20px",  
    },
    paginationContainer: {
        position: "absolute",
        bottom: "25px",
        right: "125px",  
    }
};

  const handleClose = () => {
    console.log("Component closed!"); // Replace with your actual close logic
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={styles.container}>
      <CloseIcon style={styles.closeIcon} onClick={handleClose} /> {/* Close icon */}
        {/* Library Header */}
        <div style={styles.header}>
          <h2>Library</h2>
          <div style={styles.subtitle}>
            Here is a list of datasets already connected to your Obviously AI account.
          </div>
        </div>

        <hr style={styles.divider} />

        {/* Search Box */}
        <div style={styles.searchBoxContainer}>
        <SearchIcon style={styles.searchIcon} /> {/* Search icon inside the input box */}
        <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={styles.searchBox}
        />
        </div>

        {/* DataGrid Table */}
        <div style={styles.dataGridContainer}>
        <DataGrid
            rows={currentPageRows}
            columns={columns}
            checkboxSelection
            pageSize={pageSize}
            page={page} // Pass the current page
            rowCount={currentPageRows.length} // Total number of rows after filtering
            disableSelectionOnClick={true}
            onPageSizeChange={(newPageSize : any) => setPageSize(newPageSize)}
            onPageChange={(newPage : any) => setPage(newPage)} // Handle page change
            pageSizeOptions={[5, 10, 25]}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
            }
            sx={{
                "& .MuiTablePagination-displayedRows": { display: "none" },
                "& .even-row": { backgroundColor: "#fafafa" },
                "& .odd-row": { backgroundColor: "#ffffff" },
            }}
        />
        <div style={styles.paginationContainer}>
          <span>
            {startIndex}-{endIndex} of {filteredRows.length}
          </span>
        </div>

        </div>
              {/* Next Button */}
        <div style={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          endIcon={<ArrowForwardIcon />}
          style={{
            borderRadius: '20px', 
            textTransform: 'none',
          }}
        >Next</Button>
        </div>
      </div>
    </div>
  );
};