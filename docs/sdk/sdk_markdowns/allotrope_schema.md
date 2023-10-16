---
sidebar_label: Allotrope Schemas
title: Allotrope Schemas
displayed_sidebar: SDKSidebar
---


## Allotrope Validation Schemas


This page contains the validation schemas for the Allotrope SDK.  These schemas can be used to validate Pandas DataFrames as shown below.



```python
from ganymede_sdk.validation.allotrope import *
automated_reactors_schema = AutomatedReactorsSchema()

# validate data types of an example DataFrame called df_reactor_FTIR
# which contains the FTIR document from the Automated Reactors schema
# 
# For more information, check out the [Pandera documentation](https://pandera.readthedocs.io/en/stable/index.html)
df_reactor_FTIR = automated_reactors_schema.FTIR_profile.validate(df_reactor_FTIR)
```
                

### `instrument` AutomatedReactorsSchema

#### `table` FTIR_profile

- radiation source type: str
- spectrometer type: str
- detector type: str

#### `table` NIR_profile

- measurement device identifier: str

#### `table` RAMAN_profile

- excitation laser power setting: float64
- dark background correction active: bool

#### `table` UV_Vis_profile

- cell path length: float64

#### `table` analyte_document

- analyte name: str

#### `table` chemical_document

- chemical name: str
- reaction component role type: str
- molar mass: float64
- SMILES molecular structure: str
- InChI molecular structure: str
- InChIKey molecular structure: str
- Molfile molecular structure: str

#### `table` chord_length_distibution_profile

- laser rotation speed setting: float64
- chord selection setting: str
- stuck particle correction enable setting: bool
- measured laser rotation speed data cube: str
- Chord Length Distribution Data Cube: str

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- batch identifier: str
- device identifier: str
- baseline: str

#### `table` impedance_scan_profile

- impedance scan data cube: str
- impedance spectrum data cube: str

#### `table` jacket_temperature_profile

- jacket temperature Data Cube: str

#### `table` measurement_document

- resolution: float64
- detector gain setting: float64
- optical velocity: float64
- aperture size setting: float64
- number of averages: int64
- integration time: float64
- apodization name: str
- phase correction: str
- zero filling factor: float64
- three-dimensional FTIR spectrum: str
- three-dimensional RAMAN spectrum: str
- three-dimensional Near IR spectrum: str
- electronic absorbance bandwidth setting: float64
- slit width setting: float64
- three-dimensional ultraviolet spectrum: str

#### `table` overhead_stirring_rate_profile

- stirring rate data cube: str

#### `table` pH_profile

- measuring device identifier: str
- probe identifier: str
- probe type: str
- pH Data Cube: str

#### `table` purge_gas_flow_rate_profile

- purge gas type: str
- Purge Gas Flow Data Cube: str

#### `table` reaction_temperature_profile

- reaction temperature Data Cube: str

#### `table` standard_aggregate_document

- pH calibration slope: float64
- calibration assessment: str

#### `table` standard_document

- temperature: float64
- standard nominal value: float64
- standard measured value: float64

### `instrument` BalanceSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- calibration time: datetime64[ns]
- calibration certificate identifier: str
- sample weight: float64
- gross weight: float64
- tare weight: float64

### `instrument` BulkDensitySchema

#### `table` document

- measurement time: datetime64[ns]
- equipment serial number: str
- asset management identifier: str
- analytical method identifier: str
- sample identifier: str
- measurement identifier: str
- analyst: str
- batch identifier: str
- assay data identifier: str
- assay comment: str
- material identifier: str
- balance identifier: str
- tare weight: float64
- gross weight: float64
- sample weight: float64

#### `table` intermediate_tapped_density_document

- cumulative count datum: int64
- cumulative count: int64

#### `table` loose_density_document

- volume: float64
- loose density result: float64

#### `table` tapped_density_document

- tapped density result: float64

### `instrument` CellCountingSchema

#### `table` cell_counting_document

- analyst: str
- submitter: str

#### `table` data_processing_document

- cell type processing method: str
- minimum cell diameter setting: float64
- maximum cell diameter setting: float64
- cell density dilution factor: float64

#### `table` data_system_document

- data system instance identifier: str
- file name: str
- UNC path: str
- software name: str
- software version: str
- ASM converter name: str
- ASM converter version: str

#### `table` device_control_document

- device type: str
- sample volume setting: float64
- detection type: str
- illumination setting: float64
- exposure duration setting: float64
- detector gain setting: float64
- excitation wavelength setting: float64
- detector wavelength setting: float64
- fluorescent tag setting: str

#### `table` device_system_document

- device identifier: str
- model number: str
- device serial number: str

#### `table` image_aggregate_document

- image document: str

#### `table` image_document

- index: int64
- experimental data identifier: str

#### `table` measurement_document

- measurement identifier: str
- measurement time: datetime64[ns]

#### `table` processed_data_document

- viability (cell counter): float64
- total cell density (cell counter): float64
- viable cell density (cell counter): float64
- dead cell density (cell counter): float64
- average total cell diameter: float64
- average viable cell diameter (cell counter): float64
- average dead cell diameter (cell counter): float64
- total cell count: float64
- viable cell count: float64
- dead cell count: float64
- average total cell circularity: float64
- average viable cell circularity: float64
- fluorescence tag positive cell count: float64
- fluorescence tag positive cell density: float64
- fluorescence tag positive percentage: float64

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- location identifier: str
- local identifier: str

### `instrument` CellCultureAnalyzerSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- osmolality: float64
- viable cell density (cell counter): float64
- viability (cell counter): float64
- total cell density (cell counter): float64
- average live cell diameter (cell counter): float64
- data processing time: datetime64[ns]

#### `table` glucose_analysis_document_cell_culture

- mass concentration: float64

#### `table` glutamate_analysis_document_cell_culture

- molar concentration: float64

### `instrument` CodeReaderSchema

#### `table` document

- code scan result: str
- equipment serial number: str
- measurement time: datetime64[ns]
- analyst: str
- calibration time: datetime64[ns]
- device response signal: str
- control command: str

### `instrument` ConductivitySchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- electric conductivity: float64
- temperature: float64

### `instrument` CoulometricOvenKfSchema

#### `table` device_acquisition_method

- purge gas type: str
- maximum run time setting: float64
- change rate end point setting: float64
- drying temperature setting: float64
- titrant solution type: str
- titration solvent type: str

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- asset management identifier: str
- analytical method identifier: str
- assay identifier: str
- assay comment: str
- calibration time: datetime64[ns]

#### `table` measurement_aggregate_document

- arithmetic mean: float64
- relative standard deviation: float64

#### `table` measurement_document

- sample role type: str
- method name: str
- vial location identifier: str
- balance identifier: str
- sample weight: float64
- sample identifier: str
- batch identifier: str
- absolute water content: float64
- expiry time prescription: datetime64[ns]
- water mass concentration: float64
- water mass fraction: float64
- material identifier: str
- experimental data identifier: str

### `instrument` DifferentialScanningCalorimetrySchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay data identifier: str
- assay comment: str
- material identifier: str
- balance identifier: str
- sample weight: float64
- device method identifier: str
- container type: str
- container state description: str

#### `table` exothermic_peak

- peak onset temperature: float64
- peak temperature: float64
- transition enthalpy: float64

#### `table` glass_transition_peak

- transition assignment: str
- glass transition temperature: float64
- heat capacity (dsc): float64

### `instrument` DisintegrationSchema

#### `table` document

- ADF converter name: str
- ADF converter method identifier: str
- ADF converter version: str
- product manufacturer: str
- model number: str
- firmware version: str
- asset management identifier: str
- measurement identifier: str
- end time: datetime64[ns]
- measurement time: datetime64[ns]
- sample temperature setting: float64
- maximum run time setting: float64
- disintegration apparatus disc type: str
- disintegration apparatus basket identifier: str
- solvent identifier: str
- arithmetic mean: float64
- standard deviation: float64
- minimum value: float64
- maximum value: float64
- batch identifier: str
- relative standard deviation: float64
- quantity range: float64

#### `table` solvent_identifier

- fill depth: float64
- description: str

### `instrument` DvsSchema

#### `table` document

- measurement time: datetime64[ns]
- device identifier: str
- experimental data identifier: str
- measurement method identifier: str
- sample identifier: str
- measurement identifier: str
- analyst: str
- batch identifier: str
- analytical method identifier: str
- assay identifier: str
- assay comment: str
- material identifier: str
- sample preparation description: str
- sample weight: float64
- hygroscopicity type: str
- hysteresis assessment: str

### `instrument` FluorescenceEndpointSchema

#### `table` device_control_document

- product manufactuer: str
- detector distance setting (plate reader): float64
- integration time: float64
- number of averages: float64
- detector gain setting: str
- scan position setting (plate reader): str
- detector carriage speed setting: str
- detector wavelength setting: float64
- detector bandwidth setting: float64
- wavelength filter cutoff setting: float64
- excitation wavelength setting: float64
- excitation bandwidth setting: float64

#### `table` device_document

- device type: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- analytical method identifier: str
- experimental data identifier: str
- experiment type: str
- container type: str
- plate well count: float64
- well volume: float64

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- compartment temperature: float64
- fluorescence: float64

#### `table` plate_reader_document

- analyst: str
- submitter: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- well location identifier: str
- vial location identifier: str
- location identifier: str
- mass concentration: float64

### `instrument` FoamHeightSchema

#### `table` bubble_document

- pixel count: float64
- eccentricity: float64
- relative location: str
- centroid y-coordinate: float64
- centroid x-coordinate: float64

#### `table` device_control_document

- maximum row setting (foam height): float64
- foam detection sensitivity setting: float64
- smoothing window setting: int64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` foam_height_document

- analyst: str
- submitter: str

#### `table` measurement_aggregate_document

- assay data identifier: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- file path: str
- pixel density: float64
- liquid start row: float64
- liquid end row: float64
- foam detection result: bool
- foam start row: float64
- foam end row: float64
- liquid row count: float64
- foam row count: float64
- total row count (foam height): int64
- liquid height: float64
- total foam height: float64
- total material height: float64
- air gap detection result: bool
- normalized foam row count: float64
- normalized foam height: float64
- above gap foam row count: float64
- below gap foam row count: float64
- liquid homogeneity gradient: float64
- exception description: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

### `instrument` FoamQualificationSchema

#### `table` device_control_document

- product manufactuer: str
- detector distance setting (foam qualification): float64
- measurement delay setting: float64
- detection duration setting: float64
- dielectric polarization field frequency setting: float64

#### `table` device_document

- device type: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` foam_qualification_document

- analyst: str
- submitter: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- experimental data identifier: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- ambient temperature: float64
- ambient pressure: float64
- relative humidity: float64
- polyol reservoir temperature: float64
- isocyanate reservoir temperature: float64
- plate temperature: float64
- plate heater temperature: float64
- reaction duration: float64
- container type: str
- force gauge type: str
- container shape: str
- container height: float64
- container diameter: float64
- process termination state type: str
- start height: float64
- end height: float64
- gel time: float64
- foam profile data cube: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

#### `table` statistics_document

- statistical feature: str
- maximum value: float64
- acquisition time: float64

### `instrument` FplcSchema

#### `table` chromatography_column_document

- chromatography column part number: str
- chromatography column serial number: str
- chromatography column length: float64
- column inner diameter: float64
- chromatography column chemistry type: str
- chromatography column particle size: float64

#### `table` device_control_document

- detector offset setting: float64
- detector sampling rate setting: float64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str
- pump model number: str
- detector model number: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` gradient_segment_document

- start time: float64
- end time: float64

#### `table` injection_document

- injection identifier: str
- autosampler injection volume setting (chromatography): float64
- injection time: datetime64[ns]

#### `table` liquid_chromatography_document

- analyst: str
- submitter: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- chromatogram data cube: str

#### `table` peak

- identifier: str
- peak width at 5% of height: float64
- peak width at baseline: float64
- peak width at half height: float64
- peak height: float64
- asymmetry factor measured at 5 percent height: float64
- statistical skew (chromatography): float64
- number of theoretical plates by peak width at half height: float64
- number of theoretical plates by tangent method: float64
- retention time: float64
- peak area: float64
- peak start: float64
- peak end: float64
- capacity factor (chromatography): float64
- relative peak height: float64
- relative peak area: float64
- peak selectivity (chromatography): float64
- chromatographic peak resolution using baseline peak widths: float64
- chromatographic peak resolution using peak width at half-height: float64
- chromatographic peak resolution using statistical moments: float64

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

### `instrument` FtirSchema

#### `table` document

- measurement time: datetime64[ns]
- equipment serial number: str
- experimental data identifier: str
- analytical method identifier: str
- sample identifier: str
- measurement identifier: str
- analyst: str
- batch identifier: str
- assay data identifier: str
- assay comment: str
- material identifier: str
- sample preparation description: str
- reference identifier: str
- conformance assessment: bool
- detector type: str
- beamsplitter type: str
- michelson interferometer acquisition mode: str
- sample measurement interface type: str

#### `table` measurement_document

- number of averages: float64
- resolution: float64
- detector gain setting: float64
- optical velocity setting: float64
- aperture size setting: float64

### `instrument` GasChromatographySchema

#### `table` chromatography_column_document

- chromatography column part number: str
- chromatography column serial number: str
- chromatography column length: float64
- column inner diameter: float64
- chromatography column chemistry type: str
- chromatography column particle size: float64
- chromatography column fill type: str

#### `table` device_control_document

- detector offset setting: float64
- detector sampling rate setting: float64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str
- pump model number: str
- detector model number: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` gas_chromatography_document

- analyst: str
- submitter: str
- device method identifier: str

#### `table` injection_document

- injection identifier: str
- injection volume setting: float64
- injection time: datetime64[ns]

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- chromatogram data cube: str

#### `table` peak

- identifier: str
- peak width at 5% of height: float64
- peak width at baseline: float64
- peak width at half height: float64
- peak height: float64
- asymmetry factor measured at 5 percent height: float64
- statistical skew (chromatography): float64
- number of theoretical plates by peak width at half height: float64
- number of theoretical plates by tangent method: float64
- retention time: float64
- peak area: float64
- peak start: float64
- peak end: float64
- capacity factor (chromatography): float64
- relative peak height: float64
- relative peak area: float64
- peak selectivity (chromatography): float64
- chromatographic peak resolution using baseline peak widths: float64
- chromatographic peak resolution using peak width at half-height: float64
- chromatographic peak resolution using statistical moments: float64

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- sampling type: str

### `instrument` GlossSchema

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` gloss_document

- analyst: str
- submitter: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- method identifier: str
- experiment identifier: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- coated material description: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

#### `table` sample_preparation_document

- abrasion cycle count: int64
- abrasion weight: float64
- abrading material description: str
- duration: float64
- temperature: float64
- humidity: float64
- coating gap height: float64

### `instrument` HotTackSchema

#### `table` analyst

- measurement time: datetime64[ns]
- method identifier: str
- ambient temperature: float64
- experiment identifier: str

#### `table` device_control_document

- relative location: str
- temperature setting: float64
- grip pressure setting: float64
- dwell time setting (hot tack): float64
- delay time setting (hot tack): float64
- grip velocity setting: float64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` hot_tack_document

- analyst: str
- submitter: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- sample width: float64
- heat seal length: float64

#### `table` separation_document

- peak load force: float64
- break type: str
- energy (datum): float64
- strain: float64

#### `table` statistics_document

- temperature: float64
- force: float64
- statistical feature: str
- seal initiation temperature: float64

### `instrument` LcMsSchema

#### `table` analyte_aggregate_document

- analyte document: str

#### `table` analyte_document

- analyte name: str
- mass: float64
- m/z: float64

#### `table` chromatography_column_document

- chromatography column part number: str
- chromatography column serial number: str
- chromatography column length: float64
- column inner diameter: float64
- chromatography column chemistry type: str
- chromatography column particle size: float64
- product manufactuer: str

#### `table` data_processing_aggregate_document

- data processing description: str

#### `table` device_control_document

- detector offset setting: float64
- detector sampling rate setting: float64
- detector relative offset setting: float64
- detection duration setting: float64
- m/z minimum setting: float64
- m/z maximum setting: float64
- polarity setting: str
- measurement mode setting: str
- detector wavelength setting: float64
- detector bandwidth setting: float64

#### `table` device_document

- device type: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str
- pump model number: str
- detector model number: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` injection_document

- injection identifier: str
- autosampler injection volume setting (chromatography): float64
- injection time: datetime64[ns]

#### `table` liquid_chromatography_document

- analyst: str
- submitter: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- mass spectrum data cube: str

#### `table` peak

- identifier: str
- peak width at 5% of height: float64
- peak width at baseline: float64
- peak width at half height: float64
- peak height: float64
- asymmetry factor measured at 5 percent height: float64
- statistical skew (chromatography): float64
- number of theoretical plates by peak width at half height: float64
- number of theoretical plates by tangent method: float64
- retention time: float64
- peak area: float64
- peak start: float64
- peak end: float64
- capacity factor (chromatography): float64
- relative peak height: float64
- relative peak area: float64
- peak selectivity (chromatography): float64
- chromatographic peak resolution using baseline peak widths: float64
- chromatographic peak resolution using peak width at half-height: float64
- chromatographic peak resolution using statistical moments: float64
- peak width: float64

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` processed_data_document

- data format specification type: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

#### `table` sample_introduction_document

- sample introduction mode setting: str
- flow rate setting: float64
- laser firing frequency setting: float64
- sample introduction description: str
- sample introduction medium: str

### `instrument` LightObscurationSchema

#### `table` document

- sample identifier: str
- measurement identifier: str
- model number: str
- equipment serial number: str
- detector model number: str
- detector identifier: str
- analyst: str
- measurement time: datetime64[ns]
- detector view volume: float64
- repetition setting: int64
- sample volume setting: float64
- flush volume setting: float64
- dilution factor setting: float64
- data processing omission setting: bool
- particle size: float64
- cumulative count: float64
- differential count: float64
- cumulative particle density: float64
- differential particle density: float64

### `instrument` LiquidChromatographySchema

#### `table` chromatography_column_document

- chromatography column part number: str
- chromatography column serial number: str
- chromatography column length: float64
- column inner diameter: float64
- chromatography column chemistry type: str
- chromatography column particle size: float64

#### `table` device_control_document

- detector offset setting: float64
- detector sampling rate setting: float64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str
- pump model number: str
- detector model number: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` injection_document

- injection identifier: str
- autosampler injection volume setting (chromatography): float64
- injection time: datetime64[ns]

#### `table` liquid_chromatography_document

- analyst: str
- submitter: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- chromatogram data cube: str

#### `table` peak

- identifier: str
- peak width at 5% of height: float64
- peak width at baseline: float64
- peak width at half height: float64
- peak height: float64
- asymmetry factor measured at 5 percent height: float64
- statistical skew (chromatography): float64
- number of theoretical plates by peak width at half height: float64
- number of theoretical plates by tangent method: float64
- retention time: float64
- peak area: float64
- peak start: float64
- peak end: float64
- capacity factor (chromatography): float64
- relative peak height: float64
- relative peak area: float64
- peak selectivity (chromatography): float64
- chromatographic peak resolution using baseline peak widths: float64
- chromatographic peak resolution using peak width at half-height: float64
- chromatographic peak resolution using statistical moments: float64

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str

### `instrument` LossOnDryingSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay identifier: str
- assay comment: str
- material identifier: str
- sample weight: float64
- experimental data identifier: str
- balance identifier: str
- calibration time: datetime64[ns]
- temperature profile setting: str
- drying temperature setting: float64
- sample weight before drying: float64
- maximum run time setting: float64
- change rate end point setting: float64
- extrapolated weight end point setting: bool
- acqusition time: float64
- extrapolated moisture content: float64
- dry sample weight: float64
- weight loss: float64
- relative weight loss on drying: float64
- mass profile: str

### `instrument` LuminescenceEndpointSchema

#### `table` device_control_document

- product manufactuer: str
- detector distance setting (plate reader): float64
- integration time: float64
- number of averages: float64
- detector gain setting: str
- scan position setting (plate reader): str
- detector carriage speed setting: str
- detector wavelength setting: float64
- detector bandwidth setting: float64

#### `table` device_document

- device type: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- analytical method identifier: str
- experimental data identifier: str
- experiment type: str
- container type: str
- plate well count: float64
- well volume: float64

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- compartment temperature: float64
- luminescence: float64

#### `table` plate_reader_document

- analyst: str
- submitter: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- well location identifier: str
- vial location identifier: str
- location identifier: str
- mass concentration: float64

### `instrument` MassSpectrometrySchema

#### `table` detector_control_document

- detection type: str
- detector relative offset setting: float64
- detector sampling rate setting: float64
- detection duration setting: float64
- m/z minimum setting: float64
- m/z maximum setting: float64
- polarity setting: str

#### `table` device_document

- device type: str
- product manufacturer: str
- model number: str

#### `table` device_system_document

- asset management identifier: str

#### `table` mass_spectrometry_document

- analyst: str
- submitter: str

#### `table` measurement_document

- measurement mode setting: str

#### `table` peak

- identifier: str
- peak width at 5% of height: float64
- peak width at baseline: float64
- peak width at half height: float64
- peak height: float64
- m/z: float64
- peak area: float64
- mass: float64
- relative peak height: float64
- asymmetry factor measured at 5 percent height: float64
- statistical skew (chromatography): float64
- number of theoretical plates by peak width at half height: float64
- number of theoretical plates by tangent method: float64
- retention time: float64
- peak start: float64
- peak end: float64
- capacity factor (chromatography): float64
- peak selectivity (chromatography): float64
- chromatographic peak resolution using baseline peak widths: float64
- chromatographic peak resolution using peak width at half-height: float64
- chromatographic peak resolution using statistical moments: float64
- relative peak area: float64

#### `table` processed_data_document

- data format specification type: str
- data processing description: str
- data cube: str

#### `table` sample_document

- sample identifier: str
- description: str
- written name: str

#### `table` sample_introduction_document

- sample introduction mode setting: str
- flow rate setting: float64
- laser firing frequency setting: float64
- sample introduction description: str
- sample introduction medium: str

### `instrument` NephelometrySchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- balance identifier: str
- weighing result: float64
- solvent identifier: str
- standard nominal value: float64
- standard measured value: float64
- calibration result deviation: float64
- calibration assessment: str
- baseline: float64
- turbidity: float64
- background corrected turbidity: float64

### `instrument` OpticalMicroscopySchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- equipment serial number: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay data identifier: str
- Sample preparation description: str
- material identifier: str
- birefringence result: bool
- particle shape characterization: str
- association state: str
- assay comment: str

#### `table` image_document

- magnification setting: float64
- polarized light enabled setting: bool
- experimental data identifier: str

### `instrument` PhSensorSchema

#### `table` device_type

- device type: str
- product manufacturer: str
- equipment serial number: str
- model number: str
- device identifier: str
- calibration time: datetime64[ns]
- calibration certificate identifier: str

#### `table` measurement_aggregate_document

- sample identifier: str
- experiment identifier: str
- measurement time: datetime64[ns]
- analyst: str
- method identifier: str
- description: str

#### `table` statistics_document

- pH: float64
- temperature: float64

### `instrument` PlateReaderSchema

#### `table` device_control_document

- detector distance setting (plate reader): float64
- integration time: float64
- number of averages: float64
- detector gain setting: str
- scan position setting (plate reader): str
- detector carriage speed setting: str

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- analytical method identifier: str
- experimental data identifier: str
- experiment type: str
- container type: str
- plate well count: float64
- well volume: float64

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- compartment temperature: float64

#### `table` plate_reader_document

- analyst: str
- submitter: str

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- well location identifier: str
- vial location identifier: str
- location identifier: str
- well plate identifier: str
- mass concentration: float64

### `instrument` PressureSensorSchema

#### `table` device_type

- device type: str
- product manufacturer: str
- equipment serial number: str
- model number: str
- device identifier: str
- calibration time: datetime64[ns]
- calibration certificate identifier: str

#### `table` measurement_aggregate_document

- sample identifier: str
- experiment identifier: str
- measurement time: datetime64[ns]
- analyst: str
- method identifier: str
- description: str

#### `table` statistics_document

- pressure: float64
- temperature: float64

### `instrument` PsdSchema

#### `table` distribution

- cumulative distribution percentage: float64
- bin upper limit: float64

#### `table` distribution_document

- distribution type: str

#### `table` document

- measurement time: datetime64[ns]
- device identifier: str
- experimental data identifier: str
- measurement method identifier: str
- sample identifier: str
- measurement identifier: str
- analyst: str
- batch identifier: str
- assay identifier: str
- assay comment: str
- material identifier: str
- sample preparation description: str
- sample weight: float64
- instrument suspension media: str
- sample suspension media: str
- plumbing flow rate setting: float64
- sonication duration setting: float64
- sonication power setting: float64
- fluid refractive index setting: float64
- particle refractive index setting: float64
- particle shape setting: str
- average particle size: float64
- standard deviation: float64
- distribution modality: str

### `instrument` PumpSchema

#### `table` device_control_document

- device response signal: str
- control command: str

#### `table` device_system_document

- equipment serial number: str

#### `table` measurement_aggregate_document

- analyst: str
- calibration time: datetime64[ns]

#### `table` measurement_document

- measurement time: datetime64[ns]
- flow rate: float64
- dispensing duration: float64
- dispensed volume: float64

### `instrument` QnmrSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- equipment serial number: str
- asset management identifier: str
- analytical method identifier: str
- assay data identifier: str
- assay comment: str
- inter scan relaxation delay setting: float64
- number of averages: int64

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- material identifier: str
- conformance assessment: bool

#### `table` sample_preparation_document

- balance identifier: str
- sample weight: float64
- solvent identifier: str

### `instrument` QpcrSchema

#### `table` calculated_data_document

- calculated data identifier: str
- calculated data name: str
- calculation description: str
- calculated result: float64

#### `table` data_processing_document

- automatic cycle threshold enabled setting: bool
- cycle threshold value setting: float64
- automatic baseline determination enabled setting: bool
- baseline determination start cycle setting: float64
- baseline determination end cycle setting: float64
- genotyping qPCR method identifier: str
- genotyping qPCR method setting: float64
- reference DNA description: str
- reference sample description: str

#### `table` data_source_document

- data source identifier: str
- data source feature: str

#### `table` data_system_document

- data system instance identifier: str
- file name: str
- UNC path: str
- software name: str
- software version: str
- ASM converter name: str
- ASM converter version: str

#### `table` device_control_document

- device type: str
- detection type: str
- total cycle number setting: float64
- denaturing temperature setting: float64
- denaturing duration setting: float64
- annealing temperature setting: float64
- annealing duration setting: float64
- primer extension temperature setting: float64
- primer extension duration setting: float64
- qPCR detection chemistry: str
- reporter dye setting: str
- quencher dye setting: str
- passive reference dye setting: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` document

- measurement method identifier: str

#### `table` measurement_aggregate_document

- analytical method identifier: str
- experimental data identifier: str
- experiment type: str
- container type: str
- plate well count: float64
- well volume: float64

#### `table` measurement_document

- measurement identifier: str
- measurement time: datetime64[ns]
- target DNA description: str

#### `table` processed_data_document

- cycle threshold result: float64
- normalized reporter result: float64
- baseline corrected reporter result: float64
- genotyping qPCR result: str

#### `table` qPCR_document

- analyst: str
- submitter: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- well location identifier: str
- well plate identifier: str
- mass concentration: float64

### `instrument` SemSchema

#### `table` document

- ADF converter name: str
- ADF converter method identifier: str
- ADF converter version: str
- asset management identifier: str
- equipment serial number: str
- analyst: str
- sample identifier: str
- written name: str
- sample preparation description: str
- material identifier: str
- analytical method identifier: str
- assay data identifier: str
- measurement identifier: str
- measurement time: datetime64[ns]
- particle shape characterization: str
- association state: str
- experimental data identifier: str

### `instrument` SpecificRotationSchema

#### `table` background_document

- solvent identifier: str
- cell path length: float64
- sample temperature: float64
- angle of optical rotation: float64

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay identifier: str
- assay comment: str
- material identifier: str
- sample weight: float64
- experimental data identifier: str
- balance identifier: str
- calibration time: datetime64[ns]
- radiation source type: str
- wavelength: float64

#### `table` measurement_document

- mass concentration: float64
- specific rotation: float64

### `instrument` StirringSchema

#### `table` device_document

- device type: str
- product manufacturer: str
- equipment serial number: str
- model number: str
- device identifier: str
- calibration time: datetime64[ns]
- calibration certificate identifier: str

#### `table` measurement_aggregate_document

- sample identifier: str
- experiment identifier: str
- measurement time: datetime64[ns]
- analyst: str
- method identifier: str
- description: str
- ambient temperature: float64

#### `table` statistics_document

- rotational speed: float64
- torque: float64

### `instrument` SurfaceAreaAnalysisSchema

#### `table` BET_point_document

- relative pressure (BET): float64
- pressure: float64
- adsorbed volume at STP: float64
- elapsed time: float64

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- equipment serial number: str
- asset management identifier: str
- analytical method identifier: str
- assay data identifier: str
- assay comment: str
- specific surface area: float64
- slope: float64
- y-intercept: float64
- BET C constant: float64
- monolayer quantity: float64
- correlation coefficient: float64
- measurement end time: datetime64[ns]
- evacuation rate setting: float64
- evacuation time setting: float64
- measurement chamber free space volume: float64
- equilibration time: float64

#### `table` reference_material_document

- reference material identifier: str
- reference material weight: float64

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- material identifier: str
- balance identifier: str
- tare weight: float64
- gross weight: float64
- sample weight: float64
- degassed sample weight: float64

### `instrument` TabletHardnessSchema

#### `table` document

- ADF converter name: str
- ADF converter method identifier: str
- ADF converter version: str
- asset management identifier: str
- equipment serial number: str
- calibration time: datetime64[ns]
- due date (calibration): datetime64[ns]
- analyst: str
- measurement identifier: str

#### `table` measurement_aggregate_document

- start time: datetime64[ns]
- end time: datetime64[ns]
- sample identifier: str
- material identifier: str
- batch identifier: str
- tablet press identifier: str
- container identifier: str
- assay comment: str

#### `table` measurement_document

- measurement time: datetime64[ns]
- sample weight: float64
- tablet thickness: float64
- diameter: float64
- hardness: float64
- data validity assessment: str

### `instrument` TemperatureSensorSchema

#### `table` device_type

- device type: str
- product manufacturer: str
- equipment serial number: str
- model number: str
- device identifier: str
- calibration time: datetime64[ns]
- calibration certificate identifier: str

#### `table` measurement_aggregate_document

- sample identifier: str
- experiment identifier: str
- measurement time: datetime64[ns]
- analyst: str
- method identifier: str
- description: str

#### `table` statistics_document

- temperature: float64

### `instrument` TensileTestSchema

#### `table` chord_modulus_document

- chord modulus: float64

#### `table` device_document

- device type: str
- product manufactuer: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` device_type

- grip velocity setting: float64
- grip distance setting: float64

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- experimental data identifier: str

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- ambient temperature: float64
- ambient humidity: float64
- yield stress: float64
- yield strain: float64
- break stress: float64
- break strain: float64
- peak load force: float64
- fracture energy: float64
- Young modulus: float64

#### `table` processed_data_aggregate_document

- processed data document: str

#### `table` sample_document

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- sampling orientation type: str
- sample shape classification: str
- sample thickness: float64
- sample width: float64

#### `table` secant_modulus_document

- secant modulus: float64
- diagnostic trace document: str
- data cube: str

#### `table` tensile_test_document

- analyst: str
- submitter: str

### `instrument` ThermogravimetricAnalysisSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay data identifier: str
- assay comment: str
- material identifier: str
- sample weight: float64
- device method identifier: str

#### `table` thermal_analysis_peak

- transition assignment: str
- peak onset temperature: float64
- peak temperature: float64
- weight loss: float64

### `instrument` TitrationSchema

#### `table` document

- measurement identifier: str
- measurement time: datetime64[ns]
- analyst: str
- sample identifier: str
- batch identifier: str
- asset management identifier: str
- analytical method identifier: str
- assay identifier: str
- assay comment: str
- material identifier: str
- sample weight: float64
- experimental data identifier: str
- titrant solution type: str
- titer: float64
- titration solvent type: str
- equivalence point volume: float64
- balance identifier: str
- calibration time: datetime64[ns]
- expiry time prescription: datetime64[ns]
- molar concentration: float64
- mass fraction: float64

### `instrument` UltravioletAbsorbanceSchema

#### `table` device_control_aggregate_document

- product manufactuer: str
- detector distance setting (plate reader): float64
- integration time: float64
- number of averages: float64
- detector gain setting: str
- scan position setting (plate reader): str
- detector carriage speed setting: str
- detector wavelength setting: float64
- detector bandwidth setting: float64
- electronic absorbance wavelength setting: float64
- electronic absorbance bandwidth setting: float64
- electronic absorbance reference bandwidth setting: float64

#### `table` device_document

- device type: str

#### `table` device_system_document

- asset management identifier: str
- device identifier: str
- model number: str
- equipment serial number: str
- firmware version: str
- description: str
- brand name: str
- product manufacturer: str

#### `table` diagnostic_trace_aggregate_document

- diagnostic trace document: str

#### `table` diagnostic_trace_document

- data cube: str

#### `table` electronic_absorbance_reference_wavelength_setting

- sample identifier: str
- batch identifier: str
- sample role type: str
- written name: str
- well location identifier: str
- vial location identifier: str
- location identifier: str

#### `table` measurement_aggregate_document

- measurement time: datetime64[ns]
- analytical method identifier: str
- experimental data identifier: str
- experiment type: str
- container type: str
- plate well count: float64
- well volume: float64

#### `table` measurement_document

- detection type: str
- measurement identifier: str
- compartment temperature: float64
- absorbance: float64
- electronic absorbance reference wavelength setting: float64
- mass concentration: float64

#### `table` plate_reader_document

- analyst: str
- submitter: str

#### `table` processed_data_aggregate_document

- processed data document: str

