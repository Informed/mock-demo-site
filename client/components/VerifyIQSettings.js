import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SettingsIcon from '@mui/icons-material/Settings';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const style = {
    width: '600px',
    height: '20%',
    padding: '20px',
}
export default function VerifyIQSettings({
    initVerifyIQ,
    verifyIQACURL,
    verifyIQIIQURL,
    verifyIQApplicant,
    verifyIQEnvironment,
    verifyIQDocumentModalOption,
    verifyIQStipulation,
    verifyIQUploadWebhook,
    verifyIQCollectWebhook,
    verifyIQJWT,
    handleVerifyIQAuthTokenChange,
    handleVerifyIQEnvironmentChange,
    handleVerifyIQACURLChange,
    handleVerifyIQIIQURLChange,
    handleVerifyIQApplicantChange,
    handleVerifyIQDocumentModalOptionChange,
    handleVerifyIQStipulationChange,
    handleVerifyIQCollectWebhookChange,
    handleVerifyIQUploadWebhookChange,
    handleVerifyIQJWTChange
}) {

    return (
        <div style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
        }}>
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <SettingsIcon {
                            ...bindTrigger(popupState)}
                            sx={
                                {
                                    color: "#2b6777",
                                    '&:hover': {
                                        color: '#1565c0',
                                        cursor: 'pointer',
                                    },
                                }
                            }
                        />
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Box sx={style}>
                                <Typography variant="h6" align="center" sx={{ paddingBottom: "10px" }}>
                                    VerifyIQ Settings
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                Required Settings
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="standard-basic"
                                                            label="Auth Token"
                                                            onChange={handleVerifyIQAuthTokenChange}
                                                            variant="standard"
                                                            helperText="Please enter auth token"
                                                            sx={{ label: { color: "#2b6777" } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FormControl fullWidth variant="standard">
                                                            <InputLabel sx={{ color: '#2b6777' }}>Environment</InputLabel>
                                                            <Select
                                                                label="Environment"
                                                                onChange={handleVerifyIQEnvironmentChange}
                                                                value={verifyIQEnvironment}
                                                            >
                                                                <MenuItem value="Staging">Staging</MenuItem>
                                                                <MenuItem value="Production">Production</MenuItem>
                                                            </Select>
                                                            <FormHelperText>Please select your desired environment</FormHelperText>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="standard-basic"
                                                            label="ActionCallback URL"
                                                            onChange={handleVerifyIQACURLChange}
                                                            variant="standard"
                                                            helperText="Please enter actionCallback URL"
                                                            value={verifyIQACURL}
                                                            sx={{ label: { color: "#2b6777" } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={8} spacing={2}>
                                                        <Grid container>
                                                            <Grid item xs={10}>
                                                                <TextField
                                                                    id="standard-basic"
                                                                    label="InformedIQ URL"
                                                                    onChange={handleVerifyIQIIQURLChange}
                                                                    variant="standard"
                                                                    helperText="Please enter InformedIQ URL"
                                                                    value={verifyIQIIQURL}
                                                                    sx={{ label: { color: "#2b6777" } }}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={initVerifyIQ}
                                                                    sx={
                                                                        {
                                                                            left: "40px",
                                                                            top: "10px",
                                                                            backgroundColor: "#2b6777"
                                                                        }
                                                                    }
                                                                >
                                                                    Initiate
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                Optional Settings
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <FormControl fullWidth variant="standard">
                                                            <InputLabel sx={{ color: '#2b6777' }}>Applicant</InputLabel>
                                                            <Select
                                                                label="Applicant"
                                                                variant="standard"
                                                                onChange={handleVerifyIQApplicantChange}
                                                                value={verifyIQApplicant}
                                                            >
                                                                <MenuItem
                                                                    value="PrimaryApplicant">
                                                                    Primary Applicant
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value="CoApplicant">
                                                                    Co-Applicant
                                                                </MenuItem>
                                                            </Select>
                                                            <FormHelperText>Please select desired applicant</FormHelperText>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FormControl fullWidth variant="standard">
                                                            <InputLabel sx={{ color: '#2b6777' }}>Document Modal</InputLabel>
                                                            <Select
                                                                variant="standard"
                                                                label="documentModalOptions"
                                                                onChange={handleVerifyIQDocumentModalOptionChange}
                                                                value={verifyIQDocumentModalOption}
                                                            >
                                                                <MenuItem value="None">
                                                                    None
                                                                </MenuItem>
                                                                <MenuItem value="RequestDocuments">
                                                                    Request Documents
                                                                </MenuItem>
                                                                <MenuItem value="RequestDocumentsOnlyIfNoAssociatedDocuments">
                                                                    Request Documents Only If No Associated Documents
                                                                </MenuItem>
                                                                <MenuItem value="UploadDocuments">
                                                                    Upload Documents
                                                                </MenuItem>
                                                                <MenuItem value="UploadDocumentsOnlyIfNoAssociatedDocuments">
                                                                    Upload Documents Only If No Associated Documents
                                                                </MenuItem>
                                                            </Select>
                                                            <FormHelperText>Please select desired Modal option</FormHelperText>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FormControl fullWidth variant="standard">
                                                            <InputLabel sx={{ color: '#2b6777' }}>Stipulation</InputLabel>
                                                            <Select
                                                                label="Stipulation"
                                                                variant="standard"
                                                                onChange={handleVerifyIQStipulationChange}
                                                                value={verifyIQStipulation}
                                                            >
                                                                <MenuItem value="Income">
                                                                    Income
                                                                </MenuItem>
                                                                <MenuItem value="Residence">
                                                                    Residence
                                                                </MenuItem>
                                                                <MenuItem value="Identity">
                                                                    Identity
                                                                </MenuItem>
                                                                <MenuItem value="Insurance">
                                                                    Insurance
                                                                </MenuItem>
                                                                <MenuItem value="SSN">
                                                                    SSN
                                                                </MenuItem>
                                                                <MenuItem value="Trade">
                                                                    Trade
                                                                </MenuItem>
                                                                <MenuItem value="PaidAccount">
                                                                    Paid Account
                                                                </MenuItem>
                                                                <MenuItem value="Phone">
                                                                    Phone
                                                                </MenuItem>
                                                                <MenuItem value="MortgageCurrent">
                                                                    Mortgage Current
                                                                </MenuItem>
                                                                <MenuItem value="BankruptcyDischarged">
                                                                    Bankruptcy Discharged
                                                                </MenuItem>
                                                                <MenuItem value="TaxLienSatisfied">
                                                                    TaxLien Satisfied
                                                                </MenuItem>
                                                                <MenuItem value="Rent">
                                                                    Rent
                                                                </MenuItem>
                                                                <MenuItem value="ChildSupportPaidAndCurrent">
                                                                    Child Support Paid And Current
                                                                </MenuItem>
                                                                <MenuItem value="ArticlesOfIncorporation">
                                                                    Articles Of Incorporation
                                                                </MenuItem>
                                                                <MenuItem value="ExecutedCrossCollateralDefaultAgreement">
                                                                    Executed Cross Collateral Default Agreement
                                                                </MenuItem>
                                                            </Select>
                                                            <FormHelperText>Please select which stipulation to display first</FormHelperText>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="standard-basic"
                                                            label="Collect Webhook URL"
                                                            variant="standard"
                                                            helperText="Please enter collectDocs Webhook URL"
                                                            value={verifyIQCollectWebhook}
                                                            onChange={handleVerifyIQCollectWebhookChange}
                                                            sx={{ label: { color: "#2b6777" } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="standard-basic"
                                                            label="Upload Webbook URL"
                                                            variant="standard"
                                                            helperText="Please enter uploadDocs Webhook URL"
                                                            value={verifyIQUploadWebhook}
                                                            onChange={handleVerifyIQUploadWebhookChange}
                                                            sx={{ label: { color: "#2b6777" } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="standard-basic"
                                                            label="JWT Token"
                                                            variant="standard"
                                                            helperText="Please enter the jwtToken"
                                                            value={verifyIQJWT}
                                                            onChange={handleVerifyIQJWTChange}
                                                            sx={{ label: { color: "#2b6777" } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextareaAutosize
                                                            label="Prechecked Documents"
                                                            placeholder="Please enter prechecked documents"
                                                            maxRows={100}
                                                            minRows={10}
                                                            style={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Popover>
                    </div>
                )
                }
            </PopupState >
        </div >
    );
}