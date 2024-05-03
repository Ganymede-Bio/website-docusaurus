---
sidebar_label: Allotrope Schemas
title: Allotrope Schemas
displayed_sidebar: APISidebar
---


## Allotrope Validation Schemas


This page contains the validation schemas to validate Pandas DataFrames against Allotrope data models (ADM).  All models with a REC (recommendation) [status](https://www.allotrope.org/product-releases) is currently supported.  Each schema corresponds to the most recent recommended data model for each instrument.


Example code for validating a Pandas DataFrame against a schema is shown below.  For more information on validation functionality, see [Pandera documentation](https://pandera.readthedocs.io/en/stable/index.html).



```python
from ganymede_sdk.validation.allotrope import *
automated_reactors_schema = AutomatedReactorsSchema()

# Validate data types of an example DataFrame called df_reactor_FTIR
# which contains the FTIR document from the Automated Reactors schema
df_reactor_FTIR = automated_reactors_schema.FTIR_profile.validate(df_reactor_FTIR)
```
                

### `instrument` AutomatedReactorsSchema

#### `table` FTIR_profile

- **probe type**: str
- **radiation source type**: str
- **spectrometer type**: str
- **detector type**: str

#### `table` NIR_profile

- **measurement device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **radiation source type**: str
- **spectrometer type**: str
- **detector type**: str

#### `table` RAMAN_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **radiation source type**: str
- **excitation laser power setting**: float64
- **dark background correction active**: bool
- **spectrometer type**: str
- **detector type**: str

#### `table` UV_Vis_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **cell path length**: float64
- **detector type**: str

#### `table` analyte_document

- **analyte name**: str
- **m/z setting**: float64

#### `table` analyte_name

- **analyte name**: str
- **m/z setting**: float64

#### `table` angular_velocity_profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` background_document

- **resolution**: float64
- **detector gain setting**: float64
- **optical velocity**: float64
- **aperture size setting**: float64
- **number of averages**: int64
- **integration time**: float64
- **apodization name**: str
- **phase correction**: str
- **zero filling factor**: float64
- **excitation laser power setting**: float64
- **dark background correction active**: bool
- **baseline**: str
- **slit width setting**: float64

#### `table` chemical_document

- **chemical name**: str
- **reaction component role type**: str
- **molar mass**: float64
- **SMILES molecular structure**: str
- **InChI molecular structure**: str
- **InChIKey molecular structure**: str
- **Molfile molecular structure**: str

#### `table` chord_length_distibution_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **calibration time**: datetime64[ns]
- **laser rotation speed setting**: float64
- **chord selection setting**: str
- **stuck particle correction enable setting**: bool
- **measured laser rotation speed data cube**: str
- **Chord Length Distribution Data Cube**: str

#### `table` concentration_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **analyte name**: str
- **calibration assessment**: str
- **calibration time**: datetime64[ns]
- **Data Cube**: str

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **batch identifier**: str
- **device identifier**: str
- **baseline**: str
- **mass spectrum**: str

#### `table` flow_rate_profile

- **device identifier**: str
- **description**: str
- **Data Cube**: str

#### `table` heat_flow__profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` heat_flow_profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` heating_or_cooling_rate_profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` impedance_scan_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **impedance scan data cube**: str
- **impedance spectrum data cube**: str

#### `table` jacket_temperature_profile

- **description**: str
- **device identifier**: str
- **jacket temperature Data Cube**: str

#### `table` log_entry

- **observation**: str
- **scalar timestamp datum**: datetime64[ns]
- **elapsed time**: float64

#### `table` mass_profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` mass_spectrometry_document

- **equipment serial number**: str
- **emission current setting**: float64
- **electron energy setting**: float64
- **mass spectrometry tune file**: str
- **mass spectrum**: str

#### `table` measurement_document

- **resolution**: float64
- **detector gain setting**: float64
- **optical velocity**: float64
- **aperture size setting**: float64
- **number of averages**: int64
- **integration time**: int64
- **apodization name**: str
- **phase correction**: str
- **zero filling factor**: float64
- **three-dimensional FTIR spectrum**: str
- **three-dimensional RAMAN spectrum**: str
- **three-dimensional Near IR spectrum**: str
- **electronic absorbance bandwidth setting**: float64
- **slit width setting**: float64
- **three-dimensional ultraviolet spectrum**: str

#### `table` observation

- **scalar timestamp datum**: datetime64[ns]

#### `table` overhead_stirring_rate_profile

- **description**: str
- **device identifier**: str
- **stirring rate data cube**: str

#### `table` pH_profile

- **measuring device identifier**: str
- **probe identifier**: str
- **probe type**: str
- **pH Data Cube**: str

#### `table` profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` purge_gas_flow_rate_profile

- **device identifier**: str
- **description**: str
- **purge gas type**: str
- **Purge Gas Flow Data Cube**: str

#### `table` reaction_temperature_profile

- **description**: str
- **device identifier**: str
- **reaction temperature Data Cube**: str

#### `table` sample_document

- **sample identifier**: str
- **description**: str
- **scalar timestamp datum**: datetime64[ns]
- **elapsed time**: float64

#### `table` scalar_timestamp_datum

- **elapsed time**: float64

#### `table` standard_aggregate_document

- **pH calibration slope**: float64
- **calibration assessment**: str
- **calibration time**: datetime64[ns]

#### `table` standard_document

- **batch identifier**: str
- **temperature**: float64
- **standard nominal value**: float64
- **standard measured value**: float64

#### `table` temperature_profile

- **description**: str
- **device identifier**: str
- **Data Cube**: str

#### `table` volume_profile

- **device identifier**: str
- **description**: str
- **Data Cube**: str

### `instrument` BalanceSchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **calibration time**: datetime64[ns]
- **calibration certificate identifier**: str
- **sample weight**: float64
- **gross weight**: float64
- **tare weight**: float64

### `instrument` BulkDensitySchema

#### `table` document

- **measurement time**: datetime64[ns]
- **equipment serial number**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **sample identifier**: str
- **measurement identifier**: str
- **analyst**: str
- **batch identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **material identifier**: str
- **balance identifier**: str
- **tare weight**: float64
- **gross weight**: float64
- **sample weight**: float64

#### `table` intermediate_tapped_density_document

- **cumulative count datum**: int64
- **volume**: float64
- **cumulative count**: int64

#### `table` loose_density_document

- **volume**: float64
- **loose density result**: float64

#### `table` tapped_density_document

- **tapped density result**: float64

### `instrument` CellCountingSchema

#### `table` cell_counting_document

- **analyst**: str
- **submitter**: str

#### `table` data_processing_document

- **cell type processing method**: str
- **minimum cell diameter setting**: float64
- **maximum cell diameter setting**: float64
- **cell density dilution factor**: float64

#### `table` data_system_document

- **data system instance identifier**: str
- **file name**: str
- **UNC path**: str
- **software name**: str
- **software version**: str
- **ASM converter name**: str
- **ASM converter version**: str

#### `table` device_control_document

- **device type**: str
- **sample volume setting**: float64
- **detection type**: str
- **illumination setting**: float64
- **exposure duration setting**: float64
- **detector gain setting**: float64
- **excitation wavelength setting**: float64
- **detector wavelength setting**: float64
- **fluorescent tag setting**: str

#### `table` device_system_document

- **device identifier**: str
- **model number**: str
- **device serial number**: str

#### `table` image_aggregate_document

- **image document**: str

#### `table` image_document

- **index**: int64
- **experimental data identifier**: str

#### `table` measurement_document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]

#### `table` processed_data_document

- **viability (cell counter)**: float64
- **total cell density (cell counter)**: float64
- **viable cell density (cell counter)**: float64
- **dead cell density (cell counter)**: float64
- **average total cell diameter**: float64
- **average viable cell diameter (cell counter)**: float64
- **average dead cell diameter (cell counter)**: float64
- **total cell count**: float64
- **viable cell count**: float64
- **dead cell count**: float64
- **average total cell circularity**: float64
- **average viable cell circularity**: float64
- **fluorescence tag positive cell count**: float64
- **fluorescence tag positive cell density**: float64
- **fluorescence tag positive percentage**: float64

#### `table` sample_document

- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **location identifier**: str
- **local identifier**: str

### `instrument` CellCultureAnalyzerSchema

#### `table` ammonium_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` calcium_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **osmolality**: float64
- **viable cell density (cell counter)**: float64
- **viability (cell counter)**: float64
- **total cell density (cell counter)**: float64
- **average live cell diameter (cell counter)**: float64
- **data processing time**: datetime64[ns]

#### `table` glucose_analysis_document_cell_culture

- **mass concentration**: float64

#### `table` glutamate_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` glutamine_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` lactate_analysis_document_cell_culture

- **mass concentration**: float64

#### `table` lactate_dehydrogenase_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` phosphate_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` potassium_analysis_document_cell_culture

- **molar concentration**: float64

#### `table` sodium_analysis_document_cell_culture

- **molar concentration**: float64

### `instrument` CodeReaderSchema

#### `table` document

- **code scan result**: str
- **equipment serial number**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **calibration time**: datetime64[ns]
- **device response signal**: str
- **control command**: str

### `instrument` ConductivitySchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **electric conductivity**: float64
- **temperature**: float64

### `instrument` CoulometricOvenKfSchema

#### `table` device_acquisition_method

- **method name**: str
- **purge gas type**: str
- **maximum run time setting**: float64
- **change rate end point setting**: float64
- **drying temperature setting**: float64
- **titrant solution type**: str
- **titration solvent type**: str

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **calibration time**: datetime64[ns]

#### `table` measurement_aggregate_document

- **arithmetic mean**: float64
- **relative standard deviation**: float64

#### `table` measurement_document

- **sample role type**: str
- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **method name**: str
- **analyst**: str
- **vial location identifier**: str
- **balance identifier**: str
- **sample weight**: float64
- **sample identifier**: str
- **batch identifier**: str
- **assay identifier**: str
- **absolute water content**: float64
- **expiry time prescription**: datetime64[ns]
- **water mass concentration**: float64
- **water mass fraction**: float64
- **material identifier**: str
- **experimental data identifier**: str

### `instrument` DifferentialScanningCalorimetrySchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **material identifier**: str
- **balance identifier**: str
- **sample weight**: float64
- **device method identifier**: str
- **container type**: str
- **container state description**: str

#### `table` endothermic_peak

- **transition assignment**: str
- **peak onset temperature**: float64
- **peak temperature**: float64
- **transition enthalpy**: float64

#### `table` exothermic_peak

- **transition assignment**: str
- **peak onset temperature**: float64
- **peak temperature**: float64
- **transition enthalpy**: float64

#### `table` glass_transition_peak

- **transition assignment**: str
- **glass transition temperature**: float64
- **heat capacity (dsc)**: float64

### `instrument` DisintegrationSchema

#### `table` document

- **ADF converter name**: str
- **ADF converter method identifier**: str
- **ADF converter version**: str
- **product manufacturer**: str
- **model number**: str
- **firmware version**: str
- **asset management identifier**: str
- **measurement identifier**: str
- **end time**: datetime64[ns]
- **measurement time**: datetime64[ns]
- **device method identifier**: str
- **sample temperature setting**: float64
- **maximum run time setting**: float64
- **disintegration apparatus disc type**: str
- **disintegration apparatus basket identifier**: str
- **solvent identifier**: str
- **arithmetic mean**: float64
- **standard deviation**: float64
- **minimum value**: float64
- **maximum value**: float64
- **batch identifier**: str
- **material suitability specification**: str
- **relative standard deviation**: float64
- **quantity range**: float64
- **position**: str
- **elapsed time**: float64
- **specification assessment**: bool

#### `table` solvent_identifier

- **fill depth**: float64
- **description**: str

### `instrument` DvsSchema

#### `table` document

- **measurement time**: datetime64[ns]
- **device identifier**: str
- **experimental data identifier**: str
- **measurement method identifier**: str
- **sample identifier**: str
- **measurement identifier**: str
- **analyst**: str
- **batch identifier**: str
- **analytical method identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample preparation description**: str
- **sample weight**: float64
- **hygroscopicity type**: str
- **hysteresis assessment**: str

### `instrument` FluorescenceEndpointSchema

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector distance setting (plate reader)**: float64
- **integration time**: float64
- **number of averages**: float64
- **detector gain setting**: str
- **scan position setting (plate reader)**: str
- **detector carriage speed setting**: str
- **detector wavelength setting**: float64
- **detector bandwidth setting**: float64
- **wavelength filter cutoff setting**: float64
- **excitation wavelength setting**: float64
- **excitation bandwidth setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufacturer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **analytical method identifier**: str
- **experimental data identifier**: str
- **experiment type**: str
- **container type**: str
- **plate well count**: float64
- **well volume**: float64

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **compartment temperature**: float64
- **fluorescence**: float64

#### `table` plate_reader_document

- **analyst**: str
- **submitter**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **well location identifier**: str
- **vial location identifier**: str
- **location identifier**: str
- **mass concentration**: float64

### `instrument` FoamHeightSchema

#### `table` bubble_document

- **pixel count**: float64
- **eccentricity**: float64
- **relative location**: str
- **centroid y-coordinate**: float64
- **centroid x-coordinate**: float64

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **maximum row setting (foam height)**: float64
- **foam detection sensitivity setting**: float64
- **smoothing window setting**: int64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` foam_height_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_aggregate_document

- **assay data identifier**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **file path**: str
- **pixel density**: float64
- **liquid start row**: float64
- **liquid end row**: float64
- **foam detection result**: bool
- **foam start row**: float64
- **foam end row**: float64
- **liquid row count**: float64
- **foam row count**: float64
- **total row count (foam height)**: int64
- **liquid height**: float64
- **total foam height**: float64
- **total material height**: float64
- **air gap detection result**: bool
- **normalized foam row count**: float64
- **normalized foam height**: float64
- **above gap foam row count**: float64
- **below gap foam row count**: float64
- **liquid homogeneity gradient**: float64
- **exception description**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

### `instrument` FoamQualificationSchema

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector distance setting (foam qualification)**: float64
- **measurement delay setting**: float64
- **detection duration setting**: float64
- **dielectric polarization field frequency setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufacturer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` foam_qualification_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **experimental data identifier**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **ambient temperature**: float64
- **ambient pressure**: float64
- **relative humidity**: float64
- **polyol reservoir temperature**: float64
- **isocyanate reservoir temperature**: float64
- **plate temperature**: float64
- **plate heater temperature**: float64
- **reaction duration**: float64
- **container type**: str
- **force gauge type**: str
- **container shape**: str
- **container height**: float64
- **container diameter**: float64
- **process termination state type**: str
- **start height**: float64
- **end height**: float64
- **gel time**: float64
- **foam profile data cube**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

#### `table` statistics_document

- **statistical feature**: str
- **maximum value**: float64
- **acquisition time**: float64

### `instrument` FplcSchema

#### `table` chromatography_column_document

- **chromatography column part number**: str
- **chromatography column serial number**: str
- **chromatography column length**: float64
- **column inner diameter**: float64
- **chromatography column chemistry type**: str
- **chromatography column particle size**: float64
- **product manufactuer**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector offset setting**: float64
- **detector sampling rate setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str
- **pump model number**: str
- **detector model number**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` gradient_segment_document

- **description**: str
- **start time**: float64
- **end time**: float64

#### `table` injection_document

- **injection identifier**: str
- **autosampler injection volume setting (chromatography)**: float64
- **injection time**: datetime64[ns]

#### `table` liquid_chromatography_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **chromatogram data cube**: str

#### `table` peak

- **identifier**: str
- **written name**: str
- **peak width at 5% of height**: float64
- **peak width at baseline**: float64
- **peak width at half height**: float64
- **peak height**: float64
- **asymmetry factor measured at 5 percent height**: float64
- **statistical skew (chromatography)**: float64
- **number of theoretical plates by peak width at half height**: float64
- **number of theoretical plates by tangent method**: float64
- **retention time**: float64
- **peak area**: float64
- **peak start**: float64
- **peak end**: float64
- **capacity factor (chromatography)**: float64
- **relative peak height**: float64
- **relative peak area**: float64
- **peak selectivity (chromatography)**: float64
- **chromatographic peak resolution using baseline peak widths**: float64
- **chromatographic peak resolution using peak width at half-height**: float64
- **chromatographic peak resolution using statistical moments**: float64

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

### `instrument` FtirSchema

#### `table` background_document

- **number of averages**: float64
- **resolution**: float64
- **detector gain setting**: float64
- **optical velocity setting**: float64
- **aperture size setting**: float64

#### `table` document

- **measurement time**: datetime64[ns]
- **equipment serial number**: str
- **experimental data identifier**: str
- **analytical method identifier**: str
- **sample identifier**: str
- **measurement identifier**: str
- **analyst**: str
- **batch identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample preparation description**: str
- **reference identifier**: str
- **conformance assessment**: bool
- **detector type**: str
- **beamsplitter type**: str
- **michelson interferometer acquisition mode**: str
- **sample measurement interface type**: str

#### `table` measurement_document

- **number of averages**: float64
- **resolution**: float64
- **detector gain setting**: float64
- **optical velocity setting**: float64
- **aperture size setting**: float64

### `instrument` GasChromatographySchema

#### `table` chromatography_column_document

- **chromatography column part number**: str
- **chromatography column serial number**: str
- **chromatography column length**: float64
- **column inner diameter**: float64
- **chromatography column chemistry type**: str
- **chromatography column particle size**: float64
- **product manufacturer**: str
- **chromatography column fill type**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector offset setting**: float64
- **detector sampling rate setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str
- **pump model number**: str
- **detector model number**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` gas_chromatography_document

- **analyst**: str
- **submitter**: str
- **device method identifier**: str

#### `table` injection_document

- **injection identifier**: str
- **injection volume setting**: float64
- **injection time**: datetime64[ns]

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **chromatogram data cube**: str

#### `table` peak

- **identifier**: str
- **written name**: str
- **peak width at 5% of height**: float64
- **peak width at baseline**: float64
- **peak width at half height**: float64
- **peak height**: float64
- **asymmetry factor measured at 5 percent height**: float64
- **statistical skew (chromatography)**: float64
- **number of theoretical plates by peak width at half height**: float64
- **number of theoretical plates by tangent method**: float64
- **retention time**: float64
- **peak area**: float64
- **peak start**: float64
- **peak end**: float64
- **capacity factor (chromatography)**: float64
- **relative peak height**: float64
- **relative peak area**: float64
- **peak selectivity (chromatography)**: float64
- **chromatographic peak resolution using baseline peak widths**: float64
- **chromatographic peak resolution using peak width at half-height**: float64
- **chromatographic peak resolution using statistical moments**: float64

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **sampling type**: str

### `instrument` GlossSchema

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` gloss_change_document

- **gloss change**: float64
- **angle**: float64

#### `table` gloss_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **method identifier**: str
- **experiment identifier**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **coated material description**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

#### `table` sample_preparation_document

- **sample preparation description**: str
- **abrasion cycle count**: int64
- **abrasion weight**: float64
- **abrasion source description**: str
- **abrading material description**: str
- **duration**: float64
- **temperature**: float64
- **humidity**: float64
- **coating gap height**: float64

#### `table` specular_reflection_document

- **gloss**: float64
- **angle**: float64

### `instrument` HotTackSchema

#### `table` analyst

- **measurement time**: datetime64[ns]
- **method identifier**: str
- **description**: str
- **ambient temperature**: float64
- **experiment identifier**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **relative location**: str
- **temperature setting**: float64
- **grip pressure setting**: float64
- **dwell time setting (hot tack)**: float64
- **delay time setting (hot tack)**: float64
- **grip velocity setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` hot_tack_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **sample width**: float64
- **heat seal length**: float64

#### `table` separation_document

- **peak load force**: float64
- **break type**: str
- **energy (datum)**: float64
- **strain**: float64

#### `table` statistics_document

- **temperature**: float64
- **force**: float64
- **statistical feature**: str
- **seal initiation temperature**: float64

### `instrument` LcMsSchema

#### `table` analyte_aggregate_document

- **analyte document**: str

#### `table` analyte_document

- **analyte name**: str
- **mass**: float64
- **m/z**: float64

#### `table` chromatography_column_document

- **chromatography column part number**: str
- **chromatography column serial number**: str
- **chromatography column length**: float64
- **column inner diameter**: float64
- **chromatography column chemistry type**: str
- **chromatography column particle size**: float64
- **product manufactuer**: str

#### `table` data_processing_aggregate_document

- **data processing description**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector offset setting**: float64
- **detector sampling rate setting**: float64
- **detector relative offset setting**: float64
- **detection duration setting**: float64
- **m/z minimum setting**: float64
- **m/z maximum setting**: float64
- **polarity setting**: str
- **measurement mode setting**: str
- **detector wavelength setting**: float64
- **detector bandwidth setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufacturer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str
- **pump model number**: str
- **detector model number**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` injection_document

- **injection identifier**: str
- **autosampler injection volume setting (chromatography)**: float64
- **injection time**: datetime64[ns]

#### `table` liquid_chromatography_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **mass spectrum data cube**: str

#### `table` peak

- **identifier**: str
- **written name**: str
- **peak width at 5% of height**: float64
- **peak width at baseline**: float64
- **peak width at half height**: float64
- **peak height**: float64
- **asymmetry factor measured at 5 percent height**: float64
- **statistical skew (chromatography)**: float64
- **number of theoretical plates by peak width at half height**: float64
- **number of theoretical plates by tangent method**: float64
- **retention time**: float64
- **peak area**: float64
- **peak start**: float64
- **peak end**: float64
- **capacity factor (chromatography)**: float64
- **relative peak height**: float64
- **relative peak area**: float64
- **peak selectivity (chromatography)**: float64
- **chromatographic peak resolution using baseline peak widths**: float64
- **chromatographic peak resolution using peak width at half-height**: float64
- **chromatographic peak resolution using statistical moments**: float64
- **peak width**: float64
- **mass**: float64
- **m/z**: float64

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` processed_data_document

- **data format specification type**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

#### `table` sample_introduction_document

- **sample introduction mode setting**: str
- **flow rate setting**: float64
- **laser firing frequency setting**: float64
- **sample introduction description**: str
- **sample introduction medium**: str

### `instrument` LightObscurationSchema

#### `table` document

- **sample identifier**: str
- **measurement identifier**: str
- **model number**: str
- **equipment serial number**: str
- **detector model number**: str
- **detector identifier**: str
- **analyst**: str
- **measurement time**: datetime64[ns]
- **detector view volume**: float64
- **repetition setting**: int64
- **sample volume setting**: float64
- **flush volume setting**: float64
- **dilution factor setting**: float64
- **data processing omission setting**: bool
- **particle size**: float64
- **cumulative count**: float64
- **differential count**: float64
- **cumulative particle density**: float64
- **differential particle density**: float64

### `instrument` LiquidChromatographySchema

#### `table` chromatography_column_document

- **chromatography column part number**: str
- **chromatography column serial number**: str
- **chromatography column length**: float64
- **column inner diameter**: float64
- **chromatography column chemistry type**: str
- **chromatography column particle size**: float64
- **product manufactuer**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector offset setting**: float64
- **detector sampling rate setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str
- **pump model number**: str
- **detector model number**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` injection_document

- **injection identifier**: str
- **autosampler injection volume setting (chromatography)**: float64
- **injection time**: datetime64[ns]

#### `table` liquid_chromatography_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **chromatogram data cube**: str

#### `table` peak

- **identifier**: str
- **written name**: str
- **peak width at 5% of height**: float64
- **peak width at baseline**: float64
- **peak width at half height**: float64
- **peak height**: float64
- **asymmetry factor measured at 5 percent height**: float64
- **statistical skew (chromatography)**: float64
- **number of theoretical plates by peak width at half height**: float64
- **number of theoretical plates by tangent method**: float64
- **retention time**: float64
- **peak area**: float64
- **peak start**: float64
- **peak end**: float64
- **capacity factor (chromatography)**: float64
- **relative peak height**: float64
- **relative peak area**: float64
- **peak selectivity (chromatography)**: float64
- **chromatographic peak resolution using baseline peak widths**: float64
- **chromatographic peak resolution using peak width at half-height**: float64
- **chromatographic peak resolution using statistical moments**: float64

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str

### `instrument` LossOnDryingSchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample weight**: float64
- **experimental data identifier**: str
- **balance identifier**: str
- **calibration time**: datetime64[ns]
- **temperature profile setting**: str
- **drying temperature setting**: float64
- **sample weight before drying**: float64
- **maximum run time setting**: float64
- **change rate end point setting**: float64
- **extrapolated weight end point setting**: bool
- **acqusition time**: float64
- **extrapolated moisture content**: float64
- **dry sample weight**: float64
- **weight loss**: float64
- **relative weight loss on drying**: float64
- **mass profile**: str

### `instrument` LuminescenceEndpointSchema

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector distance setting (plate reader)**: float64
- **integration time**: float64
- **number of averages**: float64
- **detector gain setting**: str
- **scan position setting (plate reader)**: str
- **detector carriage speed setting**: str
- **detector wavelength setting**: float64
- **detector bandwidth setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufacturer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **analytical method identifier**: str
- **experimental data identifier**: str
- **experiment type**: str
- **container type**: str
- **plate well count**: float64
- **well volume**: float64

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **compartment temperature**: float64
- **luminescence**: float64

#### `table` plate_reader_document

- **analyst**: str
- **submitter**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **well location identifier**: str
- **vial location identifier**: str
- **location identifier**: str
- **mass concentration**: float64

### `instrument` MassSpectrometrySchema

#### `table` detector_control_document

- **detection type**: str
- **detector relative offset setting**: float64
- **detector sampling rate setting**: float64
- **detection duration setting**: float64
- **m/z minimum setting**: float64
- **m/z maximum setting**: float64
- **polarity setting**: str

#### `table` device_document

- **device type**: str
- **product manufacturer**: str
- **model number**: str

#### `table` device_system_document

- **asset management identifier**: str

#### `table` mass_spectrometry_document

- **analyst**: str
- **submitter**: str

#### `table` measurement_document

- **measurement mode setting**: str

#### `table` peak

- **identifier**: str
- **written name**: str
- **peak width at 5% of height**: float64
- **peak width at baseline**: float64
- **peak width at half height**: float64
- **peak height**: float64
- **m/z**: float64
- **peak area**: float64
- **mass**: float64
- **relative peak height**: float64
- **asymmetry factor measured at 5 percent height**: float64
- **statistical skew (chromatography)**: float64
- **number of theoretical plates by peak width at half height**: float64
- **number of theoretical plates by tangent method**: float64
- **retention time**: float64
- **peak start**: float64
- **peak end**: float64
- **capacity factor (chromatography)**: float64
- **peak selectivity (chromatography)**: float64
- **chromatographic peak resolution using baseline peak widths**: float64
- **chromatographic peak resolution using peak width at half-height**: float64
- **chromatographic peak resolution using statistical moments**: float64
- **relative peak area**: float64

#### `table` processed_data_document

- **data format specification type**: str
- **data processing description**: str
- **data cube**: str

#### `table` sample_document

- **sample identifier**: str
- **description**: str
- **written name**: str

#### `table` sample_introduction_document

- **sample introduction mode setting**: str
- **flow rate setting**: float64
- **laser firing frequency setting**: float64
- **sample introduction description**: str
- **sample introduction medium**: str

### `instrument` NephelometrySchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **balance identifier**: str
- **weighing result**: float64
- **solvent identifier**: str
- **standard nominal value**: float64
- **standard measured value**: float64
- **calibration result deviation**: float64
- **calibration assessment**: str
- **baseline**: float64
- **turbidity**: float64
- **background corrected turbidity**: float64

### `instrument` OpticalMicroscopySchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **equipment serial number**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **Sample preparation description**: str
- **material identifier**: str
- **birefringence result**: bool
- **particle shape characterization**: str
- **association state**: str
- **assay comment**: str

#### `table` image_document

- **magnification setting**: float64
- **polarized light enabled setting**: bool
- **experimental data identifier**: str

### `instrument` PhSensorSchema

#### `table` device_type

- **device type**: str
- **product manufacturer**: str
- **equipment serial number**: str
- **model number**: str
- **device identifier**: str
- **calibration time**: datetime64[ns]
- **calibration certificate identifier**: str

#### `table` measurement_aggregate_document

- **sample identifier**: str
- **experiment identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **method identifier**: str
- **description**: str

#### `table` measurement_document

- **data cube**: str

#### `table` statistics_document

- **pH**: float64
- **statistical feature**: str
- **temperature**: float64

### `instrument` PlateReaderSchema

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector distance setting (plate reader)**: float64
- **integration time**: float64
- **number of averages**: float64
- **detector gain setting**: str
- **scan position setting (plate reader)**: str
- **detector carriage speed setting**: str

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **analytical method identifier**: str
- **experimental data identifier**: str
- **experiment type**: str
- **container type**: str
- **plate well count**: float64
- **well volume**: float64

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **compartment temperature**: float64

#### `table` plate_reader_document

- **analyst**: str
- **submitter**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **well location identifier**: str
- **vial location identifier**: str
- **location identifier**: str
- **well plate identifier**: str
- **mass concentration**: float64

### `instrument` PressureSensorSchema

#### `table` device_type

- **device type**: str
- **product manufacturer**: str
- **equipment serial number**: str
- **model number**: str
- **device identifier**: str
- **calibration time**: datetime64[ns]
- **calibration certificate identifier**: str

#### `table` measurement_aggregate_document

- **sample identifier**: str
- **experiment identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **method identifier**: str
- **description**: str

#### `table` measurement_document

- **data cube**: str

#### `table` statistics_document

- **pressure**: float64
- **statistical feature**: str
- **temperature**: float64

### `instrument` PsdSchema

#### `table` distribution

- **cumulative distribution percentage**: float64
- **bin upper limit**: float64

#### `table` distribution_document

- **distribution type**: str

#### `table` document

- **measurement time**: datetime64[ns]
- **device identifier**: str
- **experimental data identifier**: str
- **measurement method identifier**: str
- **sample identifier**: str
- **measurement identifier**: str
- **analyst**: str
- **batch identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample preparation description**: str
- **sample weight**: float64
- **instrument suspension media**: str
- **sample suspension media**: str
- **plumbing flow rate setting**: float64
- **sonication duration setting**: float64
- **sonication power setting**: float64
- **fluid refractive index setting**: float64
- **particle refractive index setting**: float64
- **particle shape setting**: str
- **average particle size**: float64
- **standard deviation**: float64
- **distribution modality**: str

### `instrument` PumpSchema

#### `table` device_control_document

- **device response signal**: str
- **control command**: str

#### `table` device_system_document

- **equipment serial number**: str

#### `table` measurement_aggregate_document

- **analyst**: str
- **calibration time**: datetime64[ns]

#### `table` measurement_document

- **measurement time**: datetime64[ns]
- **flow rate**: float64
- **dispensing duration**: float64
- **dispensed volume**: float64

### `instrument` QnmrSchema

#### `table` NMR_multiplet

- **peak position**: float64
- **analyte name**: str
- **peak assignment target**: str
- **associated nuclei count**: int64
- **peak area**: float64

#### `table` analyte_document

- **analyte name**: str
- **analysis material role type**: str
- **batch identifier**: str
- **molecular mass**: float64
- **SMILES molecular structure**: str
- **InChI molecular structure**: str
- **InChIKey molecular structure**: str
- **Molfile molecular structure**: str
- **qNMR purity result**: float64
- **standard deviation**: float64
- **calculation description**: str
- **analyte molar ratio**: float64
- **reference identifier**: float64

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **equipment serial number**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **inter scan relaxation delay setting**: float64
- **number of averages**: int64

#### `table` sample_document

- **sample identifier**: str
- **batch identifier**: str
- **material identifier**: str
- **conformance assessment**: bool
- **reference identifier**: str

#### `table` sample_preparation_document

- **balance identifier**: str
- **tare weight**: float64
- **gross weight**: float64
- **sample weight**: float64
- **solvent identifier**: str

#### `table` standard_document

- **reference material identifier**: str
- **balance identifier**: str
- **tare weight**: float64
- **gross weight**: float64
- **reference material weight**: float64
- **purity result**: float64

### `instrument` QpcrSchema

#### `table` calculated_data_document

- **calculated data identifier**: str
- **calculated data name**: str
- **calculation description**: str
- **calculated result**: float64

#### `table` data_processing_document

- **automatic cycle threshold enabled setting**: bool
- **cycle threshold value setting**: float64
- **automatic baseline determination enabled setting**: bool
- **baseline determination start cycle setting**: float64
- **baseline determination end cycle setting**: float64
- **genotyping qPCR method identifier**: str
- **genotyping qPCR method setting**: float64
- **reference DNA description**: str
- **reference sample description**: str

#### `table` data_source_document

- **data source identifier**: str
- **data source feature**: str

#### `table` data_system_document

- **data system instance identifier**: str
- **file name**: str
- **UNC path**: str
- **software name**: str
- **software version**: str
- **ASM converter name**: str
- **ASM converter version**: str

#### `table` device_control_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **measurement method identifier**: str
- **total cycle number setting**: float64
- **denaturing temperature setting**: float64
- **denaturing duration setting**: float64
- **annealing temperature setting**: float64
- **annealing duration setting**: float64
- **primer extension temperature setting**: float64
- **primer extension duration setting**: float64
- **qPCR detection chemistry**: str
- **reporter dye setting**: str
- **quencher dye setting**: str
- **passive reference dye setting**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` document

- **measurement method identifier**: str

#### `table` measurement_aggregate_document

- **analytical method identifier**: str
- **experimental data identifier**: str
- **experiment type**: str
- **container type**: str
- **plate well count**: float64
- **well volume**: float64

#### `table` measurement_document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **target DNA description**: str

#### `table` processed_data_document

- **cycle threshold result**: float64
- **normalized reporter result**: float64
- **baseline corrected reporter result**: float64
- **genotyping qPCR result**: str

#### `table` qPCR_document

- **analyst**: str
- **submitter**: str

#### `table` sample_document

- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **well location identifier**: str
- **well plate identifier**: str
- **mass concentration**: float64

### `instrument` SemSchema

#### `table` document

- **ADF converter name**: str
- **ADF converter method identifier**: str
- **ADF converter version**: str
- **asset management identifier**: str
- **equipment serial number**: str
- **analyst**: str
- **sample identifier**: str
- **written name**: str
- **sample preparation description**: str
- **material identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **electron energy setting**: float64
- **beam deceleration voltage setting**: float64
- **current setting**: float64
- **detector type**: str
- **image format**: str
- **image height**: float64
- **image width**: float64
- **magnification setting**: float64
- **identifier**: str
- **pressure**: float64
- **assay comment**: str
- **condenser lens voltage setting**: float64
- **electron beam working distance**: float64
- **micron marker setting**: float64
- **x-coordinate**: float64
- **y-coordinate**: float64
- **incident radiation angle**: float64
- **z-coordinate**: float64
- **scan speed setting (electron microscopy)**: float64
- **particle shape characterization**: str
- **association state**: str
- **experimental data identifier**: str

### `instrument` SpecificRotationSchema

#### `table` background_document

- **solvent identifier**: str
- **cell path length**: float64
- **sample temperature**: float64
- **angle of optical rotation**: float64

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample weight**: float64
- **experimental data identifier**: str
- **balance identifier**: str
- **calibration time**: datetime64[ns]
- **radiation source type**: str
- **wavelength**: float64

#### `table` measurement_document

- **solvent identifier**: str
- **cell path length**: float64
- **sample temperature**: float64
- **mass concentration**: float64
- **angle of optical rotation**: float64
- **specific rotation**: float64

### `instrument` StirringSchema

#### `table` device_document

- **device type**: str
- **product manufacturer**: str
- **equipment serial number**: str
- **model number**: str
- **device identifier**: str
- **calibration time**: datetime64[ns]
- **calibration certificate identifier**: str

#### `table` measurement_aggregate_document

- **sample identifier**: str
- **experiment identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **method identifier**: str
- **description**: str
- **ambient temperature**: float64

#### `table` measurement_document

- **data cube**: str

#### `table` statistics_document

- **rotational speed**: float64
- **statistical feature**: str
- **torque**: float64

### `instrument` SurfaceAreaAnalysisSchema

#### `table` BET_point_document

- **relative pressure (BET)**: float64
- **pressure**: float64
- **adsorbed volume at STP**: float64
- **saturation vapor pressure**: float64
- **elapsed time**: float64

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **equipment serial number**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **specific surface area**: float64
- **slope**: float64
- **y-intercept**: float64
- **BET C constant**: float64
- **monolayer quantity**: float64
- **correlation coefficient**: float64
- **measurement end time**: datetime64[ns]
- **evacuation rate setting**: float64
- **evacuation time setting**: float64
- **measurement chamber free space volume**: float64
- **saturation vapor pressure**: float64
- **equilibration time**: float64

#### `table` reference_material_document

- **reference material identifier**: str
- **reference material weight**: float64

#### `table` sample_document

- **sample identifier**: str
- **batch identifier**: str
- **material identifier**: str
- **balance identifier**: str
- **tare weight**: float64
- **gross weight**: float64
- **sample weight**: float64
- **degassed sample weight**: float64

### `instrument` TabletHardnessSchema

#### `table` document

- **ADF converter name**: str
- **ADF converter method identifier**: str
- **ADF converter version**: str
- **asset management identifier**: str
- **equipment serial number**: str
- **calibration time**: datetime64[ns]
- **due date (calibration)**: datetime64[ns]
- **analyst**: str
- **measurement identifier**: str

#### `table` measurement_aggregate_document

- **start time**: datetime64[ns]
- **end time**: datetime64[ns]
- **sample identifier**: str
- **material identifier**: str
- **batch identifier**: str
- **tablet press identifier**: str
- **container identifier**: str
- **assay comment**: str

#### `table` measurement_document

- **measurement time**: datetime64[ns]
- **sample weight**: float64
- **tablet thickness**: float64
- **diameter**: float64
- **hardness**: float64
- **data validity assessment**: str

### `instrument` TemperatureSensorSchema

#### `table` device_type

- **device type**: str
- **product manufacturer**: str
- **equipment serial number**: str
- **model number**: str
- **device identifier**: str
- **calibration time**: datetime64[ns]
- **calibration certificate identifier**: str

#### `table` measurement_aggregate_document

- **sample identifier**: str
- **experiment identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **method identifier**: str
- **description**: str

#### `table` measurement_document

- **data cube**: str

#### `table` statistics_document

- **temperature**: float64
- **statistical feature**: str

### `instrument` TensileTestSchema

#### `table` chord_modulus_document

- **chord modulus**: float64
- **start strain point**: float64
- **end strain point**: float64

#### `table` description

- **secant modulus**: float64
- **strain**: float64
- **data cube**: str

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` device_type

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **grip velocity setting**: float64
- **grip distance setting**: float64

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **experimental data identifier**: str

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **ambient temperature**: float64
- **ambient humidity**: float64
- **yield stress**: float64
- **yield strain**: float64
- **break stress**: float64
- **break strain**: float64
- **peak load force**: float64
- **fracture energy**: float64
- **Young modulus**: float64
- **stress-strain data cube**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

#### `table` sample_document

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **sampling orientation type**: str
- **sample shape classification**: str
- **sample thickness**: float64
- **sample width**: float64

#### `table` secant_modulus_aggregate_document

- **description**: str

#### `table` secant_modulus_document

- **secant modulus**: float64
- **strain**: float64
- **diagnostic trace document**: str
- **data cube**: str

#### `table` tensile_test_document

- **analyst**: str
- **submitter**: str

### `instrument` ThermogravimetricAnalysisSchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay data identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample weight**: float64
- **device method identifier**: str

#### `table` thermal_analysis_peak

- **transition assignment**: str
- **peak onset temperature**: float64
- **peak temperature**: float64
- **weight loss**: float64

### `instrument` TitrationSchema

#### `table` document

- **measurement identifier**: str
- **measurement time**: datetime64[ns]
- **analyst**: str
- **sample identifier**: str
- **batch identifier**: str
- **asset management identifier**: str
- **analytical method identifier**: str
- **assay identifier**: str
- **assay comment**: str
- **material identifier**: str
- **sample weight**: float64
- **experimental data identifier**: str
- **titrant solution type**: str
- **titer**: float64
- **titration solvent type**: str
- **equivalence point volume**: float64
- **balance identifier**: str
- **calibration time**: datetime64[ns]
- **expiry time prescription**: datetime64[ns]
- **molar concentration**: float64
- **mass fraction**: float64

### `instrument` UltravioletAbsorbanceSchema

#### `table` device_control_aggregate_document

- **device type**: str
- **device identifier**: str
- **detection type**: str
- **product manufactuer**: str
- **brand name**: str
- **equipment serial number**: str
- **model number**: str
- **firmware version**: str
- **detector distance setting (plate reader)**: float64
- **integration time**: float64
- **number of averages**: float64
- **detector gain setting**: str
- **scan position setting (plate reader)**: str
- **detector carriage speed setting**: str
- **detector wavelength setting**: float64
- **detector bandwidth setting**: float64
- **electronic absorbance wavelength setting**: float64
- **electronic absorbance bandwidth setting**: float64
- **electronic absorbance reference bandwidth setting**: float64

#### `table` device_document

- **device type**: str
- **device identifier**: str
- **model number**: str
- **product manufacturer**: str
- **brand name**: str
- **equipment serial number**: str
- **firmware version**: str

#### `table` device_system_document

- **asset management identifier**: str
- **device identifier**: str
- **model number**: str
- **equipment serial number**: str
- **firmware version**: str
- **description**: str
- **brand name**: str
- **product manufacturer**: str

#### `table` diagnostic_trace_aggregate_document

- **diagnostic trace document**: str

#### `table` diagnostic_trace_document

- **description**: str
- **data cube**: str

#### `table` electronic_absorbance_reference_wavelength_setting

- **description**: str
- **sample identifier**: str
- **batch identifier**: str
- **sample role type**: str
- **written name**: str
- **well location identifier**: str
- **vial location identifier**: str
- **location identifier**: str

#### `table` measurement_aggregate_document

- **measurement time**: datetime64[ns]
- **analytical method identifier**: str
- **experimental data identifier**: str
- **experiment type**: str
- **container type**: str
- **plate well count**: float64
- **well volume**: float64

#### `table` measurement_document

- **detection type**: str
- **measurement identifier**: str
- **compartment temperature**: float64
- **absorbance**: float64
- **electronic absorbance reference wavelength setting**: float64
- **mass concentration**: float64

#### `table` plate_reader_document

- **analyst**: str
- **submitter**: str

#### `table` processed_data_aggregate_document

- **processed data document**: str

