import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                    >
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi exercitationem iusto laboriosam veritatis sed culpa repudiandae eaque distinctio amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                    >
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi exercitationem iusto laboriosam veritatis sed culpa repudiandae eaque distinctio amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                    >
                        Your favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi exercitationem iusto laboriosam veritatis sed culpa repudiandae eaque distinctio amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                    >
                        Random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi exercitationem iusto laboriosam veritatis sed culpa repudiandae eaque distinctio amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                    >
                        Last question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi exercitationem iusto laboriosam veritatis sed culpa repudiandae eaque distinctio amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;