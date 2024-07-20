import "./pricetype.scss"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({priceType, handlePriceTypeChange}) {
  
  return (
    <div className="togglePrices"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "1.5rem",
      marginTop: "1rem",
    }}
  >
    <ToggleButtonGroup
      
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "&.Mui-selected": {
          color: "var(--dark-primary-color) !important",
        },
        borderColor: "var(--dark-primary-color)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--dark-primary-color) !important",
          borderColor: "unset",
          color: "var(--dark-primary-color) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--dark-primary-color) !important",
        },
      }}
    >
      <ToggleButton  value="prices" className="toggle-btn">PRICE</ToggleButton>
      <ToggleButton value="market_caps" className="toggle-btn">MKT CAP</ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-btn">VOLUME</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
