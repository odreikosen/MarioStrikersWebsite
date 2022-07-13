import React from "react";

const CountryFlag = ({country}) => {
    if (country && country.length >= 2) {
        const c = country.trim().toUpperCase();
        let cObj = countryMap[c];
        if (!cObj) {
            cObj = Object.values(countryMap).find(el => el.iso3Code === c || el.name.toUpperCase() === c);
        }
        if (cObj) {
            return <figure className="image country-flag">
                <img src={`https://www.worldometers.info/img/flags/small/${cObj.url}`} title={cObj.name}/>
            </figure>;
        }
    }
    return <div />;
};

const countryMap = {
    "AF": {
        "name": "Afghanistan",
        "iso2Code": "AF",
        "iso3Code": "AFG",
        "url": "tn_af-flag.gif"
    },
    "AL": {
        "name": "Albania",
        "iso2Code": "AL",
        "iso3Code": "ALB",
        "url": "tn_al-flag.gif"
    },
    "DZ": {
        "name": "Algeria",
        "iso2Code": "DZ",
        "iso3Code": "DZA",
        "url": "tn_ag-flag.gif"
    },
    "AD": {
        "name": "Andorra",
        "iso2Code": "AD",
        "iso3Code": "AND",
        "url": "tn_an-flag.gif"
    },
    "AO": {
        "name": "Angola",
        "iso2Code": "AO",
        "iso3Code": "AGO",
        "url": "tn_ao-flag.gif"
    },
    "AG": {
        "name": "Antigua and Barbuda",
        "iso2Code": "AG",
        "iso3Code": "ATG",
        "url": "tn_ac-flag.gif"
    },
    "AR": {
        "name": "Argentina",
        "iso2Code": "AR",
        "iso3Code": "ARG",
        "url": "tn_ar-flag.gif"
    },
    "AM": {
        "name": "Armenia",
        "iso2Code": "AM",
        "iso3Code": "ARM",
        "url": "tn_am-flag.gif"
    },
    "AU": {
        "name": "Australia",
        "iso2Code": "AU",
        "iso3Code": "AUS",
        "url": "tn_as-flag.gif"
    },
    "AT": {
        "name": "Austria",
        "iso2Code": "AT",
        "iso3Code": "AUT",
        "url": "tn_au-flag.gif"
    },
    "AZ": {
        "name": "Azerbaijan",
        "iso2Code": "AZ",
        "iso3Code": "AZE",
        "url": "tn_aj-flag.gif"
    },
    "BS": {
        "name": "Bahamas",
        "iso2Code": "BS",
        "iso3Code": "BHS",
        "url": "tn_bf-flag.gif"
    },
    "BH": {
        "name": "Bahrain",
        "iso2Code": "BH",
        "iso3Code": "BHR",
        "url": "tn_ba-flag.gif"
    },
    "BD": {
        "name": "Bangladesh",
        "iso2Code": "BD",
        "iso3Code": "BGD",
        "url": "tn_bg-flag.gif"
    },
    "BB": {
        "name": "Barbados",
        "iso2Code": "BB",
        "iso3Code": "BRB",
        "url": "tn_bb-flag.gif"
    },
    "BY": {
        "name": "Belarus",
        "iso2Code": "BY",
        "iso3Code": "BLR",
        "url": "tn_bo-flag.gif"
    },
    "BE": {
        "name": "Belgium",
        "iso2Code": "BE",
        "iso3Code": "BEL",
        "url": "tn_be-flag.gif"
    },
    "BZ": {
        "name": "Belize",
        "iso2Code": "BZ",
        "iso3Code": "BLZ",
        "url": "tn_bh-flag.gif"
    },
    "BJ": {
        "name": "Benin",
        "iso2Code": "BJ",
        "iso3Code": "BEN",
        "url": "tn_bn-flag.gif"
    },
    "BT": {
        "name": "Bhutan",
        "iso2Code": "BT",
        "iso3Code": "BTN",
        "url": "tn_bt-flag.gif"
    },
    "BO": {
        "name": "Bolivia",
        "iso2Code": "BO",
        "iso3Code": "BOL",
        "url": "tn_bl-flag.gif"
    },
    "BA": {
        "name": "Bosnia and Herzegovina",
        "iso2Code": "BA",
        "iso3Code": "BIH",
        "url": "tn_bk-flag.gif"
    },
    "BW": {
        "name": "Botswana",
        "iso2Code": "BW",
        "iso3Code": "BWA",
        "url": "tn_bc-flag.gif"
    },
    "BR": {
        "name": "Brazil",
        "iso2Code": "BR",
        "iso3Code": "BRA",
        "url": "tn_br-flag.gif"
    },
    "BN": {
        "name": "Brunei Darussalam",
        "iso2Code": "BN",
        "iso3Code": "BRN",
        "url": "tn_bx-flag.gif"
    },
    "BG": {
        "name": "Bulgaria",
        "iso2Code": "BG",
        "iso3Code": "BGR",
        "url": "tn_bu-flag.gif"
    },
    "BF": {
        "name": "Burkina Faso",
        "iso2Code": "BF",
        "iso3Code": "BFA",
        "url": "tn_uv-flag.gif"
    },
    "BI": {
        "name": "Burundi",
        "iso2Code": "BI",
        "iso3Code": "BDI",
        "url": "tn_by-flag.gif"
    },
    "CV": {
        "name": "Cabo Verde",
        "iso2Code": "CV",
        "iso3Code": "CPV",
        "url": "tn_cv-flag.gif"
    },
    "KH": {
        "name": "Cambodia",
        "iso2Code": "KH",
        "iso3Code": "KHM",
        "url": "tn_cb-flag.gif"
    },
    "CM": {
        "name": "Cameroon",
        "iso2Code": "CM",
        "iso3Code": "CMR",
        "url": "tn_cm-flag.gif"
    },
    "CA": {
        "name": "Canada",
        "iso2Code": "CA",
        "iso3Code": "CAN",
        "url": "tn_ca-flag.gif"
    },
    "CF": {
        "name": "Central African Republic",
        "iso2Code": "CF",
        "iso3Code": "CAF",
        "url": "tn_ct-flag.gif"
    },
    "TD": {
        "name": "Chad",
        "iso2Code": "TD",
        "iso3Code": "TCD",
        "url": "tn_cd-flag.gif"
    },
    "CL": {
        "name": "Chile",
        "iso2Code": "CL",
        "iso3Code": "CHL",
        "url": "tn_ci-flag.gif"
    },
    "CN": {
        "name": "China",
        "iso2Code": "CN",
        "iso3Code": "CHN",
        "url": "tn_ch-flag.gif"
    },
    "CO": {
        "name": "Colombia",
        "iso2Code": "CO",
        "iso3Code": "COL",
        "url": "tn_co-flag.gif"
    },
    "KM": {
        "name": "Comoros",
        "iso2Code": "KM",
        "iso3Code": "COM",
        "url": "tn_cn-flag.gif"
    },
    "CD": {
        "name": "Congo (the Democratic Republic of the)",
        "iso2Code": "CD",
        "iso3Code": "COD",
        "url": "tn_congo-flag.gif"
    },
    "CG": {
        "name": "Congo",
        "iso2Code": "CG",
        "iso3Code": "COG",
        "url": "tn_cg-flag.gif"
    },
    "CR": {
        "name": "Costa Rica",
        "iso2Code": "CR",
        "iso3Code": "CRI",
        "url": "tn_cs-flag.gif"
    },
    "CI": {
        "name": "Côte d'Ivoire",
        "iso2Code": "CI",
        "iso3Code": "CIV",
        "url": "tn_iv-flag.gif"
    },
    "HR": {
        "name": "Croatia",
        "iso2Code": "HR",
        "iso3Code": "HRV",
        "url": "tn_hr-flag.gif"
    },
    "CU": {
        "name": "Cuba",
        "iso2Code": "CU",
        "iso3Code": "CUB",
        "url": "tn_cu-flag.gif"
    },
    "CY": {
        "name": "Cyprus",
        "iso2Code": "CY",
        "iso3Code": "CYP",
        "url": "tn_cy-flag.gif"
    },
    "CZ": {
        "name": "Czechia",
        "iso2Code": "CZ",
        "iso3Code": "CZE",
        "url": "tn_ez-flag.gif"
    },
    "DK": {
        "name": "Denmark",
        "iso2Code": "DK",
        "iso3Code": "DNK",
        "url": "tn_da-flag.gif"
    },
    "DJ": {
        "name": "Djibouti",
        "iso2Code": "DJ",
        "iso3Code": "DJI",
        "url": "tn_dj-flag.gif"
    },
    "DM": {
        "name": "Dominica",
        "iso2Code": "DM",
        "iso3Code": "DMA",
        "url": "tn_do-flag.gif"
    },
    "DO": {
        "name": "Dominican Republic",
        "iso2Code": "DO",
        "iso3Code": "DOM",
        "url": "tn_dr-flag.gif"
    },
    "EC": {
        "name": "Ecuador",
        "iso2Code": "EC",
        "iso3Code": "ECU",
        "url": "tn_ec-flag.gif"
    },
    "EG": {
        "name": "Egypt",
        "iso2Code": "EG",
        "iso3Code": "EGY",
        "url": "tn_eg-flag.gif"
    },
    "SV": {
        "name": "El Salvador",
        "iso2Code": "SV",
        "iso3Code": "SLV",
        "url": "tn_es-flag.gif"
    },
    "GQ": {
        "name": "Equatorial Guinea",
        "iso2Code": "GQ",
        "iso3Code": "GNQ",
        "url": "tn_ek-flag.gif"
    },
    "ER": {
        "name": "Eritrea",
        "iso2Code": "ER",
        "iso3Code": "ERI",
        "url": "tn_er-flag.gif"
    },
    "EE": {
        "name": "Estonia",
        "iso2Code": "EE",
        "iso3Code": "EST",
        "url": "tn_en-flag.gif"
    },
    "SZ": {
        "name": "Eswatini",
        "iso2Code": "SZ",
        "iso3Code": "SWZ",
        "url": "tn_wz-flag.gif"
    },
    "ET": {
        "name": "Ethiopia",
        "iso2Code": "ET",
        "iso3Code": "ETH",
        "url": "tn_et-flag.gif"
    },
    "FJ": {
        "name": "Fiji",
        "iso2Code": "FJ",
        "iso3Code": "FJI",
        "url": "tn_fj-flag.gif"
    },
    "FI": {
        "name": "Finland",
        "iso2Code": "FI",
        "iso3Code": "FIN",
        "url": "tn_fi-flag.gif"
    },
    "FR": {
        "name": "France",
        "iso2Code": "FR",
        "iso3Code": "FRA",
        "url": "tn_fr-flag.gif"
    },
    "GA": {
        "name": "Gabon",
        "iso2Code": "GA",
        "iso3Code": "GAB",
        "url": "tn_gb-flag.gif"
    },
    "GM": {
        "name": "Gambia",
        "iso2Code": "GM",
        "iso3Code": "GMB",
        "url": "tn_ga-flag.gif"
    },
    "GE": {
        "name": "Georgia",
        "iso2Code": "GE",
        "iso3Code": "GEO",
        "url": "tn_gg-flag.gif"
    },
    "DE": {
        "name": "Germany",
        "iso2Code": "DE",
        "iso3Code": "DEU",
        "url": "tn_gm-flag.gif"
    },
    "GH": {
        "name": "Ghana",
        "iso2Code": "GH",
        "iso3Code": "GHA",
        "url": "tn_gh-flag.gif"
    },
    "GR": {
        "name": "Greece",
        "iso2Code": "GR",
        "iso3Code": "GRC",
        "url": "tn_gr-flag.gif"
    },
    "GD": {
        "name": "Grenada",
        "iso2Code": "GD",
        "iso3Code": "GRD",
        "url": "tn_gj-flag.gif"
    },
    "GT": {
        "name": "Guatemala",
        "iso2Code": "GT",
        "iso3Code": "GTM",
        "url": "tn_gt-flag.gif"
    },
    "GN": {
        "name": "Guinea",
        "iso2Code": "GN",
        "iso3Code": "GIN",
        "url": "tn_gv-flag.gif"
    },
    "GW": {
        "name": "Guinea-Bissau",
        "iso2Code": "GW",
        "iso3Code": "GNB",
        "url": "tn_pu-flag.gif"
    },
    "GY": {
        "name": "Guyana",
        "iso2Code": "GY",
        "iso3Code": "GUY",
        "url": "tn_gy-flag.gif"
    },
    "HT": {
        "name": "Haiti",
        "iso2Code": "HT",
        "iso3Code": "HTI",
        "url": "tn_ha-flag.gif"
    },
    "VA": {
        "name": "Holy See",
        "iso2Code": "VA",
        "iso3Code": "VAT",
        "url": "tn_vt-flag.gif"
    },
    "HN": {
        "name": "Honduras",
        "iso2Code": "HN",
        "iso3Code": "HND",
        "url": "tn_ho-flag.gif"
    },
    "HU": {
        "name": "Hungary",
        "iso2Code": "HU",
        "iso3Code": "HUN",
        "url": "tn_hu-flag.gif"
    },
    "IS": {
        "name": "Iceland",
        "iso2Code": "IS",
        "iso3Code": "ISL",
        "url": "tn_ic-flag.gif"
    },
    "IN": {
        "name": "India",
        "iso2Code": "IN",
        "iso3Code": "IND",
        "url": "tn_in-flag.gif"
    },
    "ID": {
        "name": "Indonesia",
        "iso2Code": "ID",
        "iso3Code": "IDN",
        "url": "tn_id-flag.gif"
    },
    "IR": {
        "name": "Iran",
        "iso2Code": "IR",
        "iso3Code": "IRN",
        "url": "tn_ir-flag.gif"
    },
    "IQ": {
        "name": "Iraq",
        "iso2Code": "IQ",
        "iso3Code": "IRQ",
        "url": "tn_iz-flag.gif"
    },
    "IE": {
        "name": "Ireland",
        "iso2Code": "IE",
        "iso3Code": "IRL",
        "url": "tn_ei-flag.gif"
    },
    "IL": {
        "name": "Israel",
        "iso2Code": "IL",
        "iso3Code": "ISR",
        "url": "tn_is-flag.gif"
    },
    "IT": {
        "name": "Italy",
        "iso2Code": "IT",
        "iso3Code": "ITA",
        "url": "tn_it-flag.gif"
    },
    "JM": {
        "name": "Jamaica",
        "iso2Code": "JM",
        "iso3Code": "JAM",
        "url": "tn_jm-flag.gif"
    },
    "JP": {
        "name": "Japan",
        "iso2Code": "JP",
        "iso3Code": "JPN",
        "url": "tn_ja-flag.gif"
    },
    "JO": {
        "name": "Jordan",
        "iso2Code": "JO",
        "iso3Code": "JOR",
        "url": "tn_jo-flag.gif"
    },
    "KZ": {
        "name": "Kazakhstan",
        "iso2Code": "KZ",
        "iso3Code": "KAZ",
        "url": "tn_kz-flag.gif"
    },
    "KE": {
        "name": "Kenya",
        "iso2Code": "KE",
        "iso3Code": "KEN",
        "url": "tn_ke-flag.gif"
    },
    "KI": {
        "name": "Kiribati",
        "iso2Code": "KI",
        "iso3Code": "KIR",
        "url": "tn_kr-flag.gif"
    },
    "KP": {
        "name": "North Korea",
        "iso2Code": "KP",
        "iso3Code": "PRK",
        "url": "tn_kn-flag.gif"
    },
    "KR": {
        "name": "South Korea",
        "iso2Code": "KR",
        "iso3Code": "KOR",
        "url": "tn_ks-flag.gif"
    },
    "KW": {
        "name": "Kuwait",
        "iso2Code": "KW",
        "iso3Code": "KWT",
        "url": "tn_ku-flag.gif"
    },
    "KG": {
        "name": "Kyrgyzstan",
        "iso2Code": "KG",
        "iso3Code": "KGZ",
        "url": "tn_kg-flag.gif"
    },
    "LA": {
        "name": "Lao People's Democratic Republic",
        "iso2Code": "LA",
        "iso3Code": "LAO",
        "url": "tn_la-flag.gif"
    },
    "LV": {
        "name": "Latvia",
        "iso2Code": "LV",
        "iso3Code": "LVA",
        "url": "tn_lg-flag.gif"
    },
    "LB": {
        "name": "Lebanon",
        "iso2Code": "LB",
        "iso3Code": "LBN",
        "url": "tn_le-flag.gif"
    },
    "LS": {
        "name": "Lesotho",
        "iso2Code": "LS",
        "iso3Code": "LSO",
        "url": "tn_lt-flag.gif"
    },
    "LR": {
        "name": "Liberia",
        "iso2Code": "LR",
        "iso3Code": "LBR",
        "url": "tn_li-flag.gif"
    },
    "LY": {
        "name": "Libya",
        "iso2Code": "LY",
        "iso3Code": "LBY",
        "url": "tn_ly-flag.gif"
    },
    "LI": {
        "name": "Liechtenstein",
        "iso2Code": "LI",
        "iso3Code": "LIE",
        "url": "tn_ls-flag.gif"
    },
    "LT": {
        "name": "Lithuania",
        "iso2Code": "LT",
        "iso3Code": "LTU",
        "url": "tn_lh-flag.gif"
    },
    "LU": {
        "name": "Luxembourg",
        "iso2Code": "LU",
        "iso3Code": "LUX",
        "url": "tn_lu-flag.gif"
    },
    "MG": {
        "name": "Madagascar",
        "iso2Code": "MG",
        "iso3Code": "MDG",
        "url": "tn_ma-flag.gif"
    },
    "MW": {
        "name": "Malawi",
        "iso2Code": "MW",
        "iso3Code": "MWI",
        "url": "tn_mi-flag.gif"
    },
    "MY": {
        "name": "Malaysia",
        "iso2Code": "MY",
        "iso3Code": "MYS",
        "url": "tn_my-flag.gif"
    },
    "MV": {
        "name": "Maldives",
        "iso2Code": "MV",
        "iso3Code": "MDV",
        "url": "tn_mv-flag.gif"
    },
    "ML": {
        "name": "Mali",
        "iso2Code": "ML",
        "iso3Code": "MLI",
        "url": "tn_ml-flag.gif"
    },
    "MT": {
        "name": "Malta",
        "iso2Code": "MT",
        "iso3Code": "MLT",
        "url": "tn_mt-flag.gif"
    },
    "MH": {
        "name": "Marshall Islands",
        "iso2Code": "MH",
        "iso3Code": "MHL",
        "url": "tn_rm-flag.gif"
    },
    "MR": {
        "name": "Mauritania",
        "iso2Code": "MR",
        "iso3Code": "MRT",
        "url": "tn_mr-flag.gif"
    },
    "MU": {
        "name": "Mauritius",
        "iso2Code": "MU",
        "iso3Code": "MUS",
        "url": "tn_mp-flag.gif"
    },
    "MX": {
        "name": "Mexico",
        "iso2Code": "MX",
        "iso3Code": "MEX",
        "url": "tn_mx-flag.gif"
    },
    "FM": {
        "name": "Micronesia",
        "iso2Code": "FM",
        "iso3Code": "FSM",
        "url": "tn_fm-flag.gif"
    },
    "MD": {
        "name": "Moldova",
        "iso2Code": "MD",
        "iso3Code": "MDA",
        "url": "tn_md-flag.gif"
    },
    "MC": {
        "name": "Monaco",
        "iso2Code": "MC",
        "iso3Code": "MCO",
        "url": "tn_mn-flag.gif"
    },
    "MN": {
        "name": "Mongolia",
        "iso2Code": "MN",
        "iso3Code": "MNG",
        "url": "tn_mg-flag.gif"
    },
    "ME": {
        "name": "Montenegro",
        "iso2Code": "ME",
        "iso3Code": "MNE",
        "url": "tn_mj-flag.gif"
    },
    "MA": {
        "name": "Morocco",
        "iso2Code": "MA",
        "iso3Code": "MAR",
        "url": "tn_mo-flag.gif"
    },
    "MZ": {
        "name": "Mozambique",
        "iso2Code": "MZ",
        "iso3Code": "MOZ",
        "url": "tn_mz-flag.gif"
    },
    "MM": {
        "name": "Myanmar",
        "iso2Code": "MM",
        "iso3Code": "MMR",
        "url": "tn_bm-flag.gif"
    },
    "NA": {
        "name": "Namibia",
        "iso2Code": "NA",
        "iso3Code": "NAM",
        "url": "tn_wa-flag.gif"
    },
    "NR": {
        "name": "Nauru",
        "iso2Code": "NR",
        "iso3Code": "NRU",
        "url": "tn_nr-flag.gif"
    },
    "NP": {
        "name": "Nepal",
        "iso2Code": "NP",
        "iso3Code": "NPL",
        "url": "tn_np-flag.gif"
    },
    "NL": {
        "name": "Netherlands",
        "iso2Code": "NL",
        "iso3Code": "NLD",
        "url": "tn_nl-flag.gif"
    },
    "NZ": {
        "name": "New Zealand",
        "iso2Code": "NZ",
        "iso3Code": "NZL",
        "url": "tn_nz-flag.gif"
    },
    "NI": {
        "name": "Nicaragua",
        "iso2Code": "NI",
        "iso3Code": "NIC",
        "url": "tn_nu-flag.gif"
    },
    "NE": {
        "name": "Niger",
        "iso2Code": "NE",
        "iso3Code": "NER",
        "url": "tn_ng-flag.gif"
    },
    "NG": {
        "name": "Nigeria",
        "iso2Code": "NG",
        "iso3Code": "NGA",
        "url": "tn_ni-flag.gif"
    },
    "NO": {
        "name": "Norway",
        "iso2Code": "NO",
        "iso3Code": "NOR",
        "url": "tn_no-flag.gif"
    },
    "OM": {
        "name": "Oman",
        "iso2Code": "OM",
        "iso3Code": "OMN",
        "url": "tn_mu-flag.gif"
    },
    "PK": {
        "name": "Pakistan",
        "iso2Code": "PK",
        "iso3Code": "PAK",
        "url": "tn_pk-flag.gif"
    },
    "PW": {
        "name": "Palau",
        "iso2Code": "PW",
        "iso3Code": "PLW",
        "url": "tn_ps-flag.gif"
    },
    "PS": {
        "name": "Palestine, State of",
        "iso2Code": "PS",
        "iso3Code": "PSE",
        "url": "tn_palestine-flag.gif"
    },
    "PA": {
        "name": "Panama",
        "iso2Code": "PA",
        "iso3Code": "PAN",
        "url": "tn_pm-flag.gif"
    },
    "PG": {
        "name": "Papua New Guinea",
        "iso2Code": "PG",
        "iso3Code": "PNG",
        "url": "tn_pp-flag.gif"
    },
    "PY": {
        "name": "Paraguay",
        "iso2Code": "PY",
        "iso3Code": "PRY",
        "url": "tn_pa-flag.gif"
    },
    "PE": {
        "name": "Peru",
        "iso2Code": "PE",
        "iso3Code": "PER",
        "url": "tn_pe-flag.gif"
    },
    "PH": {
        "name": "Philippines",
        "iso2Code": "PH",
        "iso3Code": "PHL",
        "url": "tn_rp-flag.gif"
    },
    "PL": {
        "name": "Poland",
        "iso2Code": "PL",
        "iso3Code": "POL",
        "url": "tn_pl-flag.gif"
    },
    "PT": {
        "name": "Portugal",
        "iso2Code": "PT",
        "iso3Code": "PRT",
        "url": "tn_po-flag.gif"
    },
    "QA": {
        "name": "Qatar",
        "iso2Code": "QA",
        "iso3Code": "QAT",
        "url": "tn_qa-flag.gif"
    },
    "MK": {
        "name": "Republic of North Macedonia",
        "iso2Code": "MK",
        "iso3Code": "MKD",
        "url": "tn_mk-flag.gif"
    },
    "RO": {
        "name": "Romania",
        "iso2Code": "RO",
        "iso3Code": "ROU",
        "url": "tn_ro-flag.gif"
    },
    "RU": {
        "name": "Russia",
        "iso2Code": "RU",
        "iso3Code": "RUS",
        "url": "tn_rs-flag.gif"
    },
    "RW": {
        "name": "Rwanda",
        "iso2Code": "RW",
        "iso3Code": "RWA",
        "url": "tn_rw-flag.gif"
    },
    "KN": {
        "name": "Saint Kitts and Nevis",
        "iso2Code": "KN",
        "iso3Code": "KNA",
        "url": "tn_sc-flag.gif"
    },
    "LC": {
        "name": "Saint Lucia",
        "iso2Code": "LC",
        "iso3Code": "LCA",
        "url": "tn_st-flag.gif"
    },
    "VC": {
        "name": "Saint Vincent and the Grenadines",
        "iso2Code": "VC",
        "iso3Code": "VCT",
        "url": "tn_vc-flag.gif"
    },
    "WS": {
        "name": "Samoa",
        "iso2Code": "WS",
        "iso3Code": "WSM",
        "url": "tn_ws-flag.gif"
    },
    "SM": {
        "name": "San Marino",
        "iso2Code": "SM",
        "iso3Code": "SMR",
        "url": "tn_sm-flag.gif"
    },
    "ST": {
        "name": "Sao Tome and Principe",
        "iso2Code": "ST",
        "iso3Code": "STP",
        "url": "tn_tp-flag.gif"
    },
    "SA": {
        "name": "Saudi Arabia",
        "iso2Code": "SA",
        "iso3Code": "SAU",
        "url": "tn_sa-flag.gif"
    },
    "SN": {
        "name": "Senegal",
        "iso2Code": "SN",
        "iso3Code": "SEN",
        "url": "tn_sg-flag.gif"
    },
    "RS": {
        "name": "Serbia",
        "iso2Code": "RS",
        "iso3Code": "SRB",
        "url": "tn_ri-flag.gif"
    },
    "SC": {
        "name": "Seychelles",
        "iso2Code": "SC",
        "iso3Code": "SYC",
        "url": "tn_se-flag.gif"
    },
    "SL": {
        "name": "Sierra Leone",
        "iso2Code": "SL",
        "iso3Code": "SLE",
        "url": "tn_sl-flag.gif"
    },
    "SG": {
        "name": "Singapore",
        "iso2Code": "SG",
        "iso3Code": "SGP",
        "url": "tn_sn-flag.gif"
    },
    "SK": {
        "name": "Slovakia",
        "iso2Code": "SK",
        "iso3Code": "SVK",
        "url": "tn_lo-flag.gif"
    },
    "SI": {
        "name": "Slovenia",
        "iso2Code": "SI",
        "iso3Code": "SVN",
        "url": "tn_si-flag.gif"
    },
    "SB": {
        "name": "Solomon Islands",
        "iso2Code": "SB",
        "iso3Code": "SLB",
        "url": "tn_bp-flag.gif"
    },
    "SO": {
        "name": "Somalia",
        "iso2Code": "SO",
        "iso3Code": "SOM",
        "url": "tn_so-flag.gif"
    },
    "ZA": {
        "name": "South Africa",
        "iso2Code": "ZA",
        "iso3Code": "ZAF",
        "url": "tn_sf-flag.gif"
    },
    "SS": {
        "name": "South Sudan",
        "iso2Code": "SS",
        "iso3Code": "SSD",
        "url": "tn_od-flag.gif"
    },
    "ES": {
        "name": "Spain",
        "iso2Code": "ES",
        "iso3Code": "ESP",
        "url": "tn_sp-flag.gif"
    },
    "LK": {
        "name": "Sri Lanka",
        "iso2Code": "LK",
        "iso3Code": "LKA",
        "url": "tn_ce-flag.gif"
    },
    "SD": {
        "name": "Sudan",
        "iso2Code": "SD",
        "iso3Code": "SDN",
        "url": "tn_su-flag.gif"
    },
    "SR": {
        "name": "Suriname",
        "iso2Code": "SR",
        "iso3Code": "SUR",
        "url": "tn_ns-flag.gif"
    },
    "SE": {
        "name": "Sweden",
        "iso2Code": "SE",
        "iso3Code": "SWE",
        "url": "tn_sw-flag.gif"
    },
    "CH": {
        "name": "Switzerland",
        "iso2Code": "CH",
        "iso3Code": "CHE",
        "url": "tn_sz-flag.gif"
    },
    "SY": {
        "name": "Syrian Arab Republic",
        "iso2Code": "SY",
        "iso3Code": "SYR",
        "url": "tn_sy-flag.gif"
    },
    "TJ": {
        "name": "Tajikistan",
        "iso2Code": "TJ",
        "iso3Code": "TJK",
        "url": "tn_ti-flag.gif"
    },
    "TZ": {
        "name": "Tanzania",
        "iso2Code": "TZ",
        "iso3Code": "TZA",
        "url": "tn_tz-flag.gif"
    },
    "TH": {
        "name": "Thailand",
        "iso2Code": "TH",
        "iso3Code": "THA",
        "url": "tn_th-flag.gif"
    },
    "TL": {
        "name": "Timor-Leste",
        "iso2Code": "TL",
        "iso3Code": "TLS",
        "url": "tn_tt-flag.gif"
    },
    "TG": {
        "name": "Togo",
        "iso2Code": "TG",
        "iso3Code": "TGO",
        "url": "tn_to-flag.gif"
    },
    "TO": {
        "name": "Tonga",
        "iso2Code": "TO",
        "iso3Code": "TON",
        "url": "tn_tn-flag.gif"
    },
    "TT": {
        "name": "Trinidad and Tobago",
        "iso2Code": "TT",
        "iso3Code": "TTO",
        "url": "tn_td-flag.gif"
    },
    "TN": {
        "name": "Tunisia",
        "iso2Code": "TN",
        "iso3Code": "TUN",
        "url": "tn_ts-flag.gif"
    },
    "TR": {
        "name": "Turkey",
        "iso2Code": "TR",
        "iso3Code": "TUR",
        "url": "tn_tu-flag.gif"
    },
    "TM": {
        "name": "Turkmenistan",
        "iso2Code": "TM",
        "iso3Code": "TKM",
        "url": "tn_tx-flag.gif"
    },
    "TV": {
        "name": "Tuvalu",
        "iso2Code": "TV",
        "iso3Code": "TUV",
        "url": "tn_tv-flag.gif"
    },
    "UG": {
        "name": "Uganda",
        "iso2Code": "UG",
        "iso3Code": "UGA",
        "url": "tn_ug-flag.gif"
    },
    "UA": {
        "name": "Ukraine",
        "iso2Code": "UA",
        "iso3Code": "UKR",
        "url": "tn_up-flag.gif"
    },
    "AE": {
        "name": "United Arab Emirates",
        "iso2Code": "AE",
        "iso3Code": "ARE",
        "url": "tn_ae-flag.gif"
    },
    "GB": {
        "name": "United Kingdom",
        "iso2Code": "GB",
        "iso3Code": "GBR",
        "url": "tn_uk-flag.gif"
    },
    "US": {
        "name": "United States of America",
        "iso2Code": "US",
        "iso3Code": "USA",
        "url": "tn_us-flag.gif"
    },
    "UY": {
        "name": "Uruguay",
        "iso2Code": "UY",
        "iso3Code": "URY",
        "url": "tn_uy-flag.gif"
    },
    "UZ": {
        "name": "Uzbekistan",
        "iso2Code": "UZ",
        "iso3Code": "UZB",
        "url": "tn_uz-flag.gif"
    },
    "VU": {
        "name": "Vanuatu",
        "iso2Code": "VU",
        "iso3Code": "VUT",
        "url": "tn_nh-flag.gif"
    },
    "VE": {
        "name": "Venezuela",
        "iso2Code": "VE",
        "iso3Code": "VEN",
        "url": "tn_ve-flag.gif"
    },
    "VN": {
        "name": "Viet Nam",
        "iso2Code": "VN",
        "iso3Code": "VNM",
        "url": "tn_vm-flag.gif"
    },
    "YE": {
        "name": "Yemen",
        "iso2Code": "YE",
        "iso3Code": "YEM",
        "url": "tn_ym-flag.gif"
    },
    "ZM": {
        "name": "Zambia",
        "iso2Code": "ZM",
        "iso3Code": "ZMB",
        "url": "tn_za-flag.gif"
    },
    "ZW": {
        "name": "Zimbabwe",
        "iso2Code": "ZW",
        "iso3Code": "ZWE",
        "url": "tn_zi-flag.gif"
    }
};

export default CountryFlag;