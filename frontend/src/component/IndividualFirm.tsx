import "../App.css";
import { Firm } from "../types";
import { Accordion } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

export default function FirmDetail({ firm }: { firm: Firm }) {
  const theme = useTheme();
  return (
    <div>
      <Accordion>
        <Typography variant="h6" gutterBottom>
          Firm ID: {firm.firm_id}
          <Divider />
          Firm Name: {firm.firm_name}
          <Divider />
          Firm Type: {firm.firm_type}
          <Divider />
          Date Added: {firm.date_added_human_readable}
          <Divider />
          Established At: {firm.established_at_human_readable}
          <Divider />
          Country: {firm.country}
          <Divider />
          Address: {firm.address}
          <Divider />
          City: {firm.city}
          <Divider />
          Postal Code: {firm.postal_code}
          <Divider />
          AUM: {firm.AUM}
          <Divider />
        </Typography>
        <Divider />
      </Accordion>
    </div>
  );
}
