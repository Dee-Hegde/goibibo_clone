const bus = [
    {
        company: "Cauvery Travels",
        type: ["non-ac", "sleeper", "seater"],
        source_t: "22:00",
        source_l: "Kalladka",
        destination_t: "05:00",
        destination_l: "Anand Rao Circle",
        duration: "7h 0m",
        boarding_point: [
            {
                point: "Kottara",
                info: "Kottra chowk",
                time: "20:40"
            },
            {
                point: "Infosys",
                info: "Kottra chowk",
                time: "20:45"
            },
            {
                point: "Ksrtc",
                info: "KSRTC Near Bharath mall",
                time: "21:00"
            },
            {
                point: "PVS",
                info: "City plaza building Rn travels",
                time: "21:05"
            },
            {
                point: "Pumpwell",
                info: "Pumpwell",
                time: "21:30"
            }
        ],
        dropping_point: [
            {
                point: "8th Mail Toll",
                info: "End of Flyover Towards Nelamangala",
                time: "04:30"
            },
            {
                point: "Jalahalli Circle",
                info: "C/o Surabhi Travels, Jahalli Circle",
                time: "04:35"
            },
            {
                point: "Goraguntepalya",
                info: "Goraguntepalya metro",
                time: "04:40"
            },
            {
                point: "Yeshwantpur",
                info: "Yeshwantpur Govardhan Theater",
                time: "04:42"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 700
            },
            {
                pos: "U2",
                status: true,
                cost: 700
            },
            {
                pos: "U3",
                status: false,
                cost: 700
            },
            {
                pos: "U4",
                status: true,
                cost: 700
            },
            {
                pos: "U5",
                status: true,
                cost: 700
            },
            {
                pos: "U6",
                status: true,
                cost: 700
            },
            {
                pos: "U7",
                status: false,
                cost: 700
            },
            {
                pos: "U8",
                status: true,
                cost: 700
            },
            {
                pos: "U9",
                status: true,
                cost: 700
            },
            {
                pos: "U10",
                status: false,
                cost: 700
            },
            {
                pos: "U11",
                status: true,
                cost: 700
            },
            {
                pos: "U12",
                status: true,
                cost: 700
            },
            {
                pos: "U13",
                status: false,
                cost: 700
            },
            {
                pos: "U14",
                status: true,
                cost: 700
            },
            {
                pos: "U15",
                status: true,
                cost: 700
            },
            {
                pos: "L1",
                status: true,
                cost: 600
            },
            {
                pos: "L2",
                status: true,
                cost: 600
            },
            {
                pos: "L3",
                status: true,
                cost: 600
            },
            {
                pos: "L4",
                status: false,
                cost: 600
            },
            {
                pos: "L5",
                status: true,
                cost: 600
            },
            {
                pos: "L6",
                status: true,
                cost: 600
            },
            {
                pos: "L7",
                status: true,
                cost: 600
            },
            {
                pos: "L8",
                status: false,
                cost: 600
            },
            {
                pos: "L9",
                status: true,
                cost: 600
            },
            {
                pos: "L10",
                status: false,
                cost: 600
            },
            {
                pos: "A1",
                status: true,
                cost: 500
            },
            {
                pos: "A2",
                status: true,
                cost: 500
            },
            {
                pos: "A3",
                status: true,
                cost: 500
            },
            {
                pos: "A4",
                status: false,
                cost: 500
            },
            {
                pos: "A5",
                status: false,
                cost: 500
            },
            {
                pos: "A6",
                status: true,
                cost: 500
            },
            {
                pos: "A7",
                status: false,
                cost: 500
            },
            {
                pos: "A8",
                status: true,
                cost: 500
            },
            {
                pos: "A9",
                status: true,
                cost: 500
            },
            {
                pos: "A10",
                status: false,
                cost: 500
            }
        ],
        rating: 4,
        popular: ["Live Tracking", "Free Cancellation"],
        amenities: ["water bottle", "blankets", "wifi"],
        policies: [
            "In the event of ticket cancellation deal amount will be non refundabl",
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Ideal Travels",
        type: ["non-ac", "sleeper"],
        source_t: "22:05",
        source_l: "Kuttar Junction",
        destination_t: "05:30",
        destination_l: "Vidyapeeta",
        duration: "7h 25m",
        boarding_point: [
            {
                point: "Kottara Infosys",
                info: "Near bus stand",
                time: "22:05"
            },
            {
                point: "Kottara Chowky",
                info: "Near bus stand",
                time: "22:06"
            },
            {
                point: "Urwa Store",
                info: "Near bus stand",
                time: "22:07"
            },
            {
                point: "Ladyhill",
                info: "Near bus stand",
                time: "22:08"
            }
        ],
        dropping_point: [
            {
                point: "Parle Toll",
                info: "Parle Toll",
                time: "04:40"
            },
            {
                point: "8th Mile Stone",
                info: "Near Petrol Pump",
                time: "04:50"
            },
            {
                point: "Jalahalli Cross",
                info: "Near Surabhi Travels",
                time: "04:55"
            },
            {
                point: "Guruguntapalya Signal",
                info: "Near Bus Stop",
                time: "05:00"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: false,
                cost: 750
            },
            {
                pos: "U2",
                status: true,
                cost: 750
            },
            {
                pos: "U3",
                status: false,
                cost: 750
            },
            {
                pos: "U4",
                status: true,
                cost: 750
            },
            {
                pos: "U5",
                status: false,
                cost: 750
            },
            {
                pos: "U6",
                status: true,
                cost: 750
            },
            {
                pos: "U7",
                status: true,
                cost: 750
            },
            {
                pos: "U8",
                status: true,
                cost: 750
            },
            {
                pos: "U9",
                status: true,
                cost: 750
            },
            {
                pos: "U10",
                status: true,
                cost: 750
            },
            {
                pos: "U11",
                status: false,
                cost: 750
            },
            {
                pos: "U12",
                status: true,
                cost: 750
            },
            {
                pos: "U13",
                status: false,
                cost: 750
            },
            {
                pos: "U14",
                status: true,
                cost: 750
            },
            {
                pos: "U15",
                status: true,
                cost: 750
            },
            {
                pos: "L1",
                status: true,
                cost: 800
            },
            {
                pos: "L2",
                status: true,
                cost: 800
            },
            {
                pos: "L3",
                status: true,
                cost: 800
            },
            {
                pos: "L4",
                status: false,
                cost: 800
            },
            {
                pos: "L5",
                status: true,
                cost: 800
            },
            {
                pos: "L6",
                status: true,
                cost: 800
            },
            {
                pos: "L7",
                status: false,
                cost: 800
            },
            {
                pos: "L8",
                status: true,
                cost: 800
            },
            {
                pos: "L9",
                status: true,
                cost: 800
            },
            {
                pos: "L10",
                status: true,
                cost: 800
            },
            {
                pos: "L11",
                status: true,
                cost: 800
            },
            {
                pos: "L12",
                status: true,
                cost: 800
            },
            {
                pos: "L13",
                status: false,
                cost: 800
            },
            {
                pos: "L14",
                status: false,
                cost: 800
            },
            {
                pos: "L15",
                status: true,
                cost: 800
            }
        ],
        rating: 4.2,
        popular: ["Live Tracking", "Go Safe"],
        amenities: ["Thermal Scanner", "blankets", "wifi"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "MRC Travels",
        type: ["non-ac", "sleeper"],
        source_t: "21:30",
        source_l: "Kuttar Junction",
        destination_t: "05:00",
        destination_l: "Nelamangala",
        duration: "7h 30m",
        boarding_point: [
            {
                point: "PANDITH HOUSE",
                info: "Bus stand",
                time: "20:40"
            },
            {
                point: "KUTTAR PADAV",
                info: "Bus stand",
                time: "20:42"
            },
            {
                point: "Yenopaya University Gate",
                info: "Bus stand",
                time: "20:44"
            },
            {
                point: "DERLAKATTE KS HEDEG HOSPITAL",
                info: "Bus stand",
                time: "20:45"
            }
        ],
        dropping_point: [
            {
                point: "Nelamangala Bypass",
                info: "Nelamangala Bypass",
                time: "04:50"
            },
            {
                point: "Parle Toll",
                info: "Parle Toll Bus Stop",
                time: "05:00"
            },
            {
                point: "8th Mail",
                info: "8th Mail Signal",
                time: "05:03"
            },
            {
                point: "Jalahalli Cross",
                info: "Jalahalli Cross",
                time: "05:05"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 650
            },
            {
                pos: "U2",
                status: true,
                cost: 650
            },
            {
                pos: "U3",
                status: false,
                cost: 650
            },
            {
                pos: "U4",
                status: true,
                cost: 650
            },
            {
                pos: "U5",
                status: false,
                cost: 650
            },
            {
                pos: "U6",
                status: false,
                cost: 650
            },
            {
                pos: "U7",
                status: true,
                cost: 650
            },
            {
                pos: "U8",
                status: true,
                cost: 650
            },
            {
                pos: "U9",
                status: false,
                cost: 650
            },
            {
                pos: "U10",
                status: true,
                cost: 650
            },
            {
                pos: "U11",
                status: false,
                cost: 650
            },
            {
                pos: "U12",
                status: false,
                cost: 650
            },
            {
                pos: "U13",
                status: false,
                cost: 650
            },
            {
                pos: "U14",
                status: true,
                cost: 650
            },
            {
                pos: "U15",
                status: true,
                cost: 650
            },
            {
                pos: "L1",
                status: true,
                cost: 650
            },
            {
                pos: "L2",
                status: false,
                cost: 650
            },
            {
                pos: "L3",
                status: true,
                cost: 650
            },
            {
                pos: "L4",
                status: true,
                cost: 650
            },
            {
                pos: "L5",
                status: true,
                cost: 650
            },
            {
                pos: "L6",
                status: true,
                cost: 650
            },
            {
                pos: "L7",
                status: true,
                cost: 650
            },
            {
                pos: "L8",
                status: false,
                cost: 650
            },
            {
                pos: "L9",
                status: true,
                cost: 650
            },
            {
                pos: "L10",
                status: false,
                cost: 650
            },
            {
                pos: "L11",
                status: true,
                cost: 650
            },
            {
                pos: "L12",
                status: false,
                cost: 650
            },
            {
                pos: "L13",
                status: true,
                cost: 650
            },
            {
                pos: "L14",
                status: false,
                cost: 650
            },
            {
                pos: "L15",
                status: true,
                cost: 650
            }
        ],
        rating: 4.4,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Sri Durga Tourist",
        type: ["non-ac", "sleeper"],
        source_t: "22:25",
        source_l: "Adyar",
        destination_t: "05:30",
        destination_l: "Dasarahalli",
        duration: "7h 5m",
        boarding_point: [
            {
                point: "Kuloor",
                info: "Mangalore",
                time: "22:10"
            },
            {
                point: "Kottara Chowki",
                info: "Mangalore",
                time: "22:11"
            },
            {
                point: "Urva Store",
                info: "Mangalore",
                time: "22:12"
            },
            {
                point: "Lady Hill",
                info: "Mangalore",
                time: "22:13"
            }
        ],
        dropping_point: [
            {
                point: "Nelamangala Bypass",
                info: "Nelamangala Bypass",
                time: "05:20"
            },
            {
                point: "8th Mail",
                info: "Bayars Travels",
                time: "05:30"
            },
            {
                point: "Jalahalli Cross",
                info: "Bayars Travels",
                time: "05:32"
            },
            {
                point: "Gorguntapalya",
                info: "Bus Stand",
                time: "05:35"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 800
            },
            {
                pos: "U2",
                status: true,
                cost: 800
            },
            {
                pos: "U3",
                status: false,
                cost: 800
            },
            {
                pos: "U4",
                status: true,
                cost: 800
            },
            {
                pos: "U5",
                status: false,
                cost: 800
            },
            {
                pos: "U6",
                status: false,
                cost: 800
            },
            {
                pos: "U7",
                status: true,
                cost: 800
            },
            {
                pos: "U8",
                status: true,
                cost: 800
            },
            {
                pos: "U9",
                status: false,
                cost: 800
            },
            {
                pos: "U10",
                status: true,
                cost: 800
            },
            {
                pos: "U11",
                status: false,
                cost: 800
            },
            {
                pos: "U12",
                status: false,
                cost: 800
            },
            {
                pos: "U13",
                status: false,
                cost: 800
            },
            {
                pos: "U14",
                status: true,
                cost: 800
            },
            {
                pos: "U15",
                status: true,
                cost: 800
            },
            {
                pos: "L1",
                status: true,
                cost: 1000
            },
            {
                pos: "L2",
                status: false,
                cost: 1000
            },
            {
                pos: "L3",
                status: true,
                cost: 1000
            },
            {
                pos: "L4",
                status: true,
                cost: 1000
            },
            {
                pos: "L5",
                status: true,
                cost: 1000
            },
            {
                pos: "L6",
                status: true,
                cost: 1000
            },
            {
                pos: "L7",
                status: true,
                cost: 1000
            },
            {
                pos: "L8",
                status: false,
                cost: 1000
            },
            {
                pos: "L9",
                status: true,
                cost: 1000
            },
            {
                pos: "L10",
                status: false,
                cost: 1000
            },
            {
                pos: "L11",
                status: true,
                cost: 1000
            },
            {
                pos: "L12",
                status: false,
                cost: 1000
            },
            {
                pos: "L13",
                status: true,
                cost: 1000
            },
            {
                pos: "L14",
                status: false,
                cost: 1000
            },
            {
                pos: "L15",
                status: true,
                cost: 1000
            }
        ],
        rating: 4.2,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light", "CCTV"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "VRL Travels",
        type: ["non-ac", "sleeper"],
        source_t: "21:30",
        source_l: "Others",
        destination_t: "05:45",
        destination_l: "Gandhinagar",
        duration: "8h 15m",
        boarding_point: [
            {
                point: "VRL MAIN OFFICE PVS KODIYAL BAIL MANGALORE",
                info: "VRL MAIN OFFICE PVS CIRCLE ,KODIYAL BAIL MANGALORE",
                time: "21:30"
            },
            {
                point: "B.C.ROAD NEAR SERVICE BUSSTAND",
                info: "B.C.ROAD SARASWATHI TRAVELS",
                time: "22:00"
            }
        ],
        dropping_point: [
            {
                point: "Nelamangala",
                info: "M.S.S TRAVELS KEMPEGOWDA CIRCLE N.H 4 BYPASS KUNIGAL CIRCLE NELAMANGALA BENGALURU",
                time: "05:00"
            },
            {
                point: "Parle-G",
                info: "PARLE-G",
                time: "05:05"
            },
            {
                point: "8th MILE",
                info: "8th MILE",
                time: "05:10"
            },
            {
                point: "JALAHALLI CROSS",
                info: "JALAHALLI CROSS",
                time: "05:15"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 550
            },
            {
                pos: "U2",
                status: true,
                cost: 550
            },
            {
                pos: "U3",
                status: false,
                cost: 550
            },
            {
                pos: "U4",
                status: true,
                cost: 550
            },
            {
                pos: "U5",
                status: true,
                cost: 550
            },
            {
                pos: "U6",
                status: false,
                cost: 550
            },
            {
                pos: "U7",
                status: false,
                cost: 550
            },
            {
                pos: "U8",
                status: true,
                cost: 550
            },
            {
                pos: "U9",
                status: false,
                cost: 550
            },
            {
                pos: "U10",
                status: false,
                cost: 550
            },
            {
                pos: "U11",
                status: false,
                cost: 550
            },
            {
                pos: "U12",
                status: true,
                cost: 550
            },
            {
                pos: "U13",
                status: false,
                cost: 550
            },
            {
                pos: "U14",
                status: false,
                cost: 550
            },
            {
                pos: "U15",
                status: true,
                cost: 550
            },
            {
                pos: "L1",
                status: true,
                cost: 600
            },
            {
                pos: "L2",
                status: true,
                cost: 600
            },
            {
                pos: "L3",
                status: true,
                cost: 600
            },
            {
                pos: "L4",
                status: true,
                cost: 600
            },
            {
                pos: "L5",
                status: true,
                cost: 600
            },
            {
                pos: "L6",
                status: true,
                cost: 600
            },
            {
                pos: "L7",
                status: true,
                cost: 600
            },
            {
                pos: "L8",
                status: true,
                cost: 600
            },
            {
                pos: "L9",
                status: false,
                cost: 600
            },
            {
                pos: "L10",
                status: false,
                cost: 600
            },
            {
                pos: "L11",
                status: false,
                cost: 600
            },
            {
                pos: "L12",
                status: false,
                cost: 600
            },
            {
                pos: "L13",
                status: true,
                cost: 600
            },
            {
                pos: "L14",
                status: false,
                cost: 600
            },
            {
                pos: "L15",
                status: true,
                cost: 600
            }
        ],
        rating: 4.1,
        popular: ["Live Tracking"],
        amenities: [],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Pragathi Tourist Corporation",
        type: ["non-ac", "sleeper", "seater"],
        source_t: "21:45",
        source_l: "Bejai",
        destination_t: "05:30",
        destination_l: "Hebbal",
        duration: "7h 45m",
        boarding_point: [
            {
                point: "Mulki Durga Travel",
                info: "Durga Travel",
                time: "21:10"
            },
            {
                point: "Haleyangadi",
                info: "Haleyangadi",
                time: "21:11"
            },
            {
                point: "Padupanambur",
                info: "Padupanambur",
                time: "21:12"
            },
            {
                point: "Mukka Bus Stand",
                info: "Mukka",
                time: "21:14"
            }
        ],
        dropping_point: [
            {
                point: "Nelamangal Bypass",
                info: "Nelamangal",
                time: "04:30"
            },
            {
                point: "8th MILE",
                info: "8th MILE",
                time: "04:50"
            },
            {
                point: "JALAHALLI CROSS",
                info: "JALAHALLI CROSS",
                time: "04:57"
            },
            {
                point: "Gangamma Circle",
                info: "Gangamma Circle",
                time: "05:01"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 950
            },
            {
                pos: "U2",
                status: true,
                cost: 950
            },
            {
                pos: "U3",
                status: false,
                cost: 950
            },
            {
                pos: "U4",
                status: true,
                cost: 950
            },
            {
                pos: "U5",
                status: true,
                cost: 950
            },
            {
                pos: "U6",
                status: false,
                cost: 950
            },
            {
                pos: "U7",
                status: false,
                cost: 950
            },
            {
                pos: "U8",
                status: true,
                cost: 950
            },
            {
                pos: "U9",
                status: false,
                cost: 950
            },
            {
                pos: "U10",
                status: false,
                cost: 950
            },
            {
                pos: "U11",
                status: false,
                cost: 950
            },
            {
                pos: "U12",
                status: true,
                cost: 950
            },
            {
                pos: "U13",
                status: false,
                cost: 950
            },
            {
                pos: "U14",
                status: false,
                cost: 950
            },
            {
                pos: "U15",
                status: true,
                cost: 950
            },
            {
                pos: "L1",
                status: true,
                cost: 1000
            },
            {
                pos: "L2",
                status: true,
                cost: 1000
            },
            {
                pos: "L3",
                status: true,
                cost: 1000
            },
            {
                pos: "L4",
                status: true,
                cost: 1000
            },
            {
                pos: "L5",
                status: true,
                cost: 1000
            },
            {
                pos: "L6",
                status: true,
                cost: 1000
            },
            {
                pos: "L7",
                status: true,
                cost: 1000
            },
            {
                pos: "L8",
                status: true,
                cost: 1000
            },
            {
                pos: "L9",
                status: false,
                cost: 1000
            },
            {
                pos: "L10",
                status: false,
                cost: 1000
            },
            {
                pos: "L11",
                status: false,
                cost: 1000
            },
            {
                pos: "L12",
                status: false,
                cost: 1000
            },
            {
                pos: "L13",
                status: true,
                cost: 1000
            },
            {
                pos: "L14",
                status: false,
                cost: 1000
            },
            {
                pos: "L15",
                status: true,
                cost: 1000
            },
            {
                pos: "A1",
                status: true,
                cost: 900
            }
        ],
        rating: 4,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light", "Pillow", "Emergency Contact Number", "Magazine Pouch"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Bharathi Travels",
        type: ["non-ac", "sleeper"],
        source_t: "22:30",
        source_l: "PVS Circle",
        destination_t: "05:30",
        destination_l: "Majestic",
        duration: "7h 0m",
        boarding_point: [
            {
                point: "Hosabettu",
                info: "Near Bus Stand",
                time: "22:05"
            },
            {
                point: "Honnakatte",
                info: "Near Bus Stand",
                time: "22:06"
            },
            {
                point: "Kulai",
                info: "Near Bus Stand",
                time: "22:07"
            },
            {
                point: "BAIKAMPADY",
                info: "Near Bus Stand",
                time: "22:09"
            }
        ],
        dropping_point: [
            {
                point: "NELAMANGALA",
                info: "Nelamangal Bus Stop",
                time: "05:00"
            },
            {
                point: "8th MILE",
                info: "8th MILE",
                time: "05:10"
            },
            {
                point: "JALAHALLI CROSS",
                info: "JALAHALLI CROSS",
                time: "05:12"
            },
            {
                point: "Goraguntepalya",
                info: "Goraguntepalya",
                time: "05:13"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 950
            },
            {
                pos: "U2",
                status: true,
                cost: 950
            },
            {
                pos: "U3",
                status: false,
                cost: 950
            },
            {
                pos: "U4",
                status: true,
                cost: 950
            },
            {
                pos: "U5",
                status: true,
                cost: 950
            },
            {
                pos: "U6",
                status: false,
                cost: 950
            },
            {
                pos: "U7",
                status: false,
                cost: 950
            },
            {
                pos: "U8",
                status: true,
                cost: 950
            },
            {
                pos: "U9",
                status: false,
                cost: 950
            },
            {
                pos: "U10",
                status: false,
                cost: 950
            },
            {
                pos: "U11",
                status: false,
                cost: 950
            },
            {
                pos: "U12",
                status: true,
                cost: 950
            },
            {
                pos: "U13",
                status: false,
                cost: 950
            },
            {
                pos: "U14",
                status: false,
                cost: 950
            },
            {
                pos: "U15",
                status: true,
                cost: 950
            },
            {
                pos: "L1",
                status: true,
                cost: 1000
            },
            {
                pos: "L2",
                status: true,
                cost: 1000
            },
            {
                pos: "L3",
                status: true,
                cost: 1000
            },
            {
                pos: "L4",
                status: true,
                cost: 1000
            },
            {
                pos: "L5",
                status: true,
                cost: 1000
            },
            {
                pos: "L6",
                status: true,
                cost: 1000
            },
            {
                pos: "L7",
                status: true,
                cost: 1000
            },
            {
                pos: "L8",
                status: true,
                cost: 1000
            },
            {
                pos: "L9",
                status: false,
                cost: 1000
            },
            {
                pos: "L10",
                status: false,
                cost: 1000
            },
            {
                pos: "L11",
                status: false,
                cost: 1000
            },
            {
                pos: "L12",
                status: false,
                cost: 1000
            },
            {
                pos: "L13",
                status: true,
                cost: 1000
            },
            {
                pos: "L14",
                status: false,
                cost: 1000
            },
            {
                pos: "L15",
                status: true,
                cost: 1000
            }
        ],
        rating: 3.7,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light", "Emergency Contact Number", "Blankets"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Sugama Tourist",
        type: ["non-ac", "sleeper", "seater"],
        source_t: "22:20",
        source_l: "Jyothi Talkies",
        destination_t: "07:15",
        destination_l: "Gottigere Bus Stop",
        duration: "8h 55m",
        boarding_point: [
            {
                point: "Bejai Ganesh Travels",
                info: "Mangalore",
                time: "22:10"
            },
            {
                point: "Bunts Hostel Sugama",
                info: "Opp Abhiman Residency",
                time: "22:20"
            },
            {
                point: "Kankanady Mangalore Gate",
                info: "Kankanady Byepass Road",
                time: "22:22"
            },
            {
                point: "Pumpwell Circle",
                info: "Byndoor - Virajpete Road",
                time: "22:23"
            }
        ],
        dropping_point: [
            {
                point: "NELAMANGALA",
                info: "Nelamangal Bus Stop",
                time: "05:10"
            },
            {
                point: "8th MILE",
                info: "8th MILE",
                time: "05:15"
            },
            {
                point: "JALAHALLI CROSS",
                info: "Opp. Rockline Mall, Tumkur Main Rd, Chokkasandra, Peenya",
                time: "05:20"
            },
            {
                point: "Goraguntepalya",
                info: "Goraguntepalya",
                time: "05:22"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 950
            },
            {
                pos: "U2",
                status: true,
                cost: 950
            },
            {
                pos: "U3",
                status: false,
                cost: 950
            },
            {
                pos: "U4",
                status: true,
                cost: 950
            },
            {
                pos: "U5",
                status: true,
                cost: 950
            },
            {
                pos: "U6",
                status: false,
                cost: 950
            },
            {
                pos: "U7",
                status: false,
                cost: 950
            },
            {
                pos: "U8",
                status: true,
                cost: 950
            },
            {
                pos: "U9",
                status: false,
                cost: 950
            },
            {
                pos: "U10",
                status: false,
                cost: 950
            },
            {
                pos: "U11",
                status: false,
                cost: 950
            },
            {
                pos: "U12",
                status: true,
                cost: 950
            },
            {
                pos: "U13",
                status: false,
                cost: 950
            },
            {
                pos: "U14",
                status: false,
                cost: 950
            },
            {
                pos: "U15",
                status: true,
                cost: 950
            },
            {
                pos: "L1",
                status: true,
                cost: 1000
            },
            {
                pos: "L2",
                status: true,
                cost: 1000
            },
            {
                pos: "L3",
                status: true,
                cost: 1000
            },
            {
                pos: "L4",
                status: true,
                cost: 1000
            },
            {
                pos: "L5",
                status: true,
                cost: 1000
            },
            {
                pos: "L6",
                status: true,
                cost: 1000
            },
            {
                pos: "L7",
                status: true,
                cost: 1000
            },
            {
                pos: "L8",
                status: true,
                cost: 1000
            },
            {
                pos: "L9",
                status: false,
                cost: 1000
            },
            {
                pos: "L10",
                status: false,
                cost: 1000
            },
            {
                pos: "A1",
                status: false,
                cost: 1000
            },
            {
                pos: "A2",
                status: true,
                cost: 1000
            },
            {
                pos: "A3",
                status: false,
                cost: 1000
            },
            {
                pos: "A4",
                status: false,
                cost: 1000
            },
            {
                pos: "A5",
                status: false,
                cost: 1000
            },
            {
                pos: "A6",
                status: true,
                cost: 1000
            },
            {
                pos: "A7",
                status: true,
                cost: 1000
            },
            {
                pos: "A8",
                status: true,
                cost: 1000
            },
            {
                pos: "A9",
                status: false,
                cost: 1000
            },
            {
                pos: "A10",
                status: false,
                cost: 1000
            }
        ],
        rating: 3.7,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light", "Emergency Contact Number", "Pillow"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Sowmiya Travels",
        type: ["non-ac", "sleeper"],
        source_t: "21:30",
        source_l: "Others",
        destination_t: "05:30",
        destination_l: "Indiranagar",
        duration: "8h 0m",
        boarding_point: [
            {
                point: "Hotel Adhidan",
                info: "Near Bus Stand",
                time: "21:30"
            },
            {
                point: "Mulki",
                info: "Near Bus Stand",
                time: "21:30"
            },
            {
                point: "Haleyangadi",
                info: "Near Bus Stand",
                time: "21:32"
            },
            {
                point: "Padupanambur",
                info: "Near Bus Stand",
                time: "21:34"
            }
        ],
        dropping_point: [
            {
                point: "NELAMANGALA",
                info: "Near Nelamangala By Pass",
                time: "04:30"
            },
            {
                point: "8th MILE",
                info: "8th MILE",
                time: "04:45"
            },
            {
                point: "JALAHALLI CROSS",
                info: "opp sangitha mobail showroom",
                time: "04:50"
            },
            {
                point: "Yashwanthapura",
                info: "Near Govardhan Theatre",
                time: "04:55"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: true,
                cost: 900
            },
            {
                pos: "U2",
                status: true,
                cost: 900
            },
            {
                pos: "U3",
                status: false,
                cost: 900
            },
            {
                pos: "U4",
                status: true,
                cost: 900
            },
            {
                pos: "U5",
                status: true,
                cost: 900
            },
            {
                pos: "U6",
                status: false,
                cost: 900
            },
            {
                pos: "U7",
                status: false,
                cost: 900
            },
            {
                pos: "U8",
                status: true,
                cost: 900
            },
            {
                pos: "U9",
                status: false,
                cost: 900
            },
            {
                pos: "U10",
                status: false,
                cost: 900
            },
            {
                pos: "U11",
                status: false,
                cost: 900
            },
            {
                pos: "U12",
                status: true,
                cost: 900
            },
            {
                pos: "U13",
                status: false,
                cost: 900
            },
            {
                pos: "U14",
                status: false,
                cost: 900
            },
            {
                pos: "U15",
                status: true,
                cost: 900
            },
            {
                pos: "L1",
                status: true,
                cost: 950
            },
            {
                pos: "L2",
                status: true,
                cost: 950
            },
            {
                pos: "L3",
                status: true,
                cost: 950
            },
            {
                pos: "L4",
                status: true,
                cost: 950
            },
            {
                pos: "L5",
                status: true,
                cost: 950
            },
            {
                pos: "L6",
                status: true,
                cost: 950
            },
            {
                pos: "L7",
                status: true,
                cost: 950
            },
            {
                pos: "L8",
                status: true,
                cost: 950
            },
            {
                pos: "L9",
                status: false,
                cost: 950
            },
            {
                pos: "L10",
                status: false,
                cost: 950
            },
            {
                pos: "L11",
                status: false,
                cost: 950
            },
            {
                pos: "L12",
                status: false,
                cost: 950
            },
            {
                pos: "L13",
                status: true,
                cost: 950
            },
            {
                pos: "L14",
                status: false,
                cost: 950
            },
            {
                pos: "L15",
                status: true,
                cost: 950
            }
        ],
        rating: 3.5,
        popular: ["Live Tracking"],
        amenities: ["Charging Point", "Reading Light", "Emergency Contact Number"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    },
    {
        company: "Anand Travels",
        type: ["non-ac", "sleeper"],
        source_t: "22:30",
        source_l: "Milagres",
        destination_t: "06:25",
        destination_l: "Nayanadahalli",
        duration: "7h 55m",
        boarding_point: [
            {
                point: "Kuloor Bus Stop",
                info: "Kuloor Bus Stop",
                time: "22:20"
            },
            {
                point: "Kottara -Infosys Bus Stop",
                info: "Kottara -Infosys Bus Stop",
                time: "22:21"
            },
            {
                point: "Ladyhill Bus Stop",
                info: "Ladyhill Bus Stop",
                time: "22:22"
            },
            {
                point: "Lalbagh Bus Stop",
                info: "Lalbagh Bus Stop - Near Pabbas Ice Cream",
                time: "22:23"
            }
        ],
        dropping_point: [
            {
                point: "NELAMANGALA",
                info: "Near Nelamangala By Pass",
                time: "04:30"
            },
            {
                point: "Parle Toll",
                info: "Parle Toll - Near Parle Toll",
                time: "04:40"
            },
            {
                point: "8th Mile",
                info: "8th Mile - Dasarahalli",
                time: "04:45"
            },
            {
                point: "JALAHALLI CROSS",
                info: "Jalahalli Cross Near KSRTC Booking Counter",
                time: "04:50"
            }
        ],
        seats: [
            {
                pos: "U1",
                status: false,
                cost: 900
            },
            {
                pos: "U2",
                status: true,
                cost: 900
            },
            {
                pos: "U3",
                status: false,
                cost: 900
            },
            {
                pos: "U4",
                status: false,
                cost: 900
            },
            {
                pos: "U5",
                status: false,
                cost: 900
            },
            {
                pos: "U6",
                status: false,
                cost: 900
            },
            {
                pos: "U7",
                status: false,
                cost: 900
            },
            {
                pos: "U8",
                status: false,
                cost: 900
            },
            {
                pos: "U9",
                status: false,
                cost: 900
            },
            {
                pos: "U10",
                status: false,
                cost: 900
            },
            {
                pos: "U11",
                status: false,
                cost: 900
            },
            {
                pos: "U12",
                status: true,
                cost: 900
            },
            {
                pos: "U13",
                status: false,
                cost: 900
            },
            {
                pos: "U14",
                status: false,
                cost: 900
            },
            {
                pos: "U15",
                status: true,
                cost: 900
            },
            {
                pos: "L1",
                status: true,
                cost: 900
            },
            {
                pos: "L2",
                status: true,
                cost: 900
            },
            {
                pos: "L3",
                status: false,
                cost: 900
            },
            {
                pos: "L4",
                status: false,
                cost: 900
            },
            {
                pos: "L5",
                status: true,
                cost: 900
            },
            {
                pos: "L6",
                status: false,
                cost: 900
            },
            {
                pos: "L7",
                status: true,
                cost: 900
            },
            {
                pos: "L8",
                status: false,
                cost: 900
            },
            {
                pos: "L9",
                status: false,
                cost: 900
            },
            {
                pos: "L10",
                status: false,
                cost: 900
            },
            {
                pos: "L11",
                status: true,
                cost: 900
            },
            {
                pos: "L12",
                status: true,
                cost: 900
            },
            {
                pos: "L13",
                status: true,
                cost: 900
            },
            {
                pos: "L14",
                status: false,
                cost: 900
            },
            {
                pos: "L15",
                status: true,
                cost: 900
            }
        ],
        rating: 2.5,
        popular: ["Live Tracking"],
        amenities: ["Personal TV", "Water Bottle", "wifi"],
        policies: [
            "All discounts offered by goibibo will be applicable based on conditions at the time of application of discounts. Please read the promotions related terms for more details",
            "Above defined cancellation charges are illustrated basis minimum fare applicable. Exact cancellation charges will depend of the final price charged along with the discount adjustments"
        ]
    }]
