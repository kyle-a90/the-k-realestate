        // 🛠️ 통합 설정 (여기서 데이터를 수정/추가/삭제하면 페이지가 자동 반영됩니다)
        // ==================================================================================
        const REPORT_CONFIG = {
            settings: {
                password: "",
                naverMapId: "46ukb0iwnx",
                pageTitle: "화성 정남면 귀래리 클린룸 공장 매매 제안서",
                copyright: "COPYRIGHT © 2025 THE K REAL ESTATE. ALL RIGHTS RESERVED."
            },
            
            // ★ 페이지 목록 구성
            pages: [
                // 1. 표지
                {
                    type: 'cover',
                    data: {
                        recipient: "알스퀘어(아인스팩 제안)",
                        proposalLabel: "FACTORY SALE PROPOSAL",
                        title: "화성 정남면<br><span class='text-accent'>클린룸(Clean Room)</span><br>단독 공장 매매",
                        subtitle: "향남IC 5분 거리, 정남2산단 인근 인접지",
                        desc: "대지 1,436평 / 전력 900kW <strong class='text-red-600'>입주시기(협의가능)</strong>",
                        proposerFirst: "주식회사 케이플랜 그룹", // 첫 번째 제안자 (옅은 회색 작은 글자로 표시, 비워두면 표시 안 함)
                        authorLabel: "제안자",
                        proposer: "더케이부동산중개법인 주식회사",
                        date: "DATE: 2025. 12. 15",
                        code: "CONFIDENTIAL"
                    }
                },
                // 2. 사업지 개요
                {
                    type: 'split_map',
                    header: { section: "Ⅰ. 물건 개요", title: "부동산 소재지 및 현황" },
                    data: {
                        list: [
                            { label: "매물명", value: "화성 정남면 귀래리 클린룸 공장", highlight: true },
                            { label: "소재지", value: "경기도 화성시 정남면 귀래리 441 외 4필지" },
                            { label: "용도지역", value: "계획관리지역 / 성장관리계획구역(산업)" },
                            { label: "대지 / 연면적", value: "대지 1,436평 / 연면적 742평" },
                            { label: "매매가", value: "54억 6,000만 원", highlight: true,color: "text-red-600" }
                        ],
                        address: "경기도 화성시 정남면 귀래리 441",
                        mapImageUrl: "https://i.ibb.co/gLbhwqsD/20251213-132415.png",
                        naverMapUrl: "https://map.naver.com/v5/search/경기도 화성시 정남면 귀래리 441"
                    }
                },
                // 3. 핵심 투자 포인트 (KPI)
                {
                    type: 'grid_kpi',
                    header: { section: "Ⅰ. 물건 개요", title: "핵심 투자 포인트" },
                    data: {
                        cards: [
                            { icon: "⚡", title: "POWER", value: "900", unit: "kW", desc: "대용량 전력 확보", sub: "승압 공사 비용 절감", color: "navy" },
                            { icon: "🏭", title: "연 면적", value: "742", unit: "평", desc: "대형 클린룸 완비", sub: "", color: "navy" },
                            { icon: "🏗️", title: "HOIST", value: "1.9", unit: "Ton", desc: "내부 호이스트 설치", sub: "물류 이동 효율 극대화", color: "navy" },
                            { icon: "💰", title: "PRICE", value: "54.6", unit: "억", desc: "합리적인 급매가", sub: "즉시 입주 가능", color: "red" }
                        ]
                    }
                },
                
                // 4. 입지 분석 (Location Analysis) - 분리됨
                {
                    type: 'split_list_img',
                    header: { section: "Ⅱ. 입지 분석", title: "교통 환경 및 입지 여건" },
                    data: {
                        items: [
                            { title: "광역 교통망", desc: "• <strong>향남IC 5분 거리</strong>: 서해안고속도로 진입이 매우 용이하여 서울 및 수도권 물류 이동에 최적화된 위치입니다." },
                            { title: "산업 단지 인프라", desc: "• <strong>정남2산단 인근 위치</strong>: 오산, 동탄 접근성 우수" },
                            { title: "토지 이용 규제", desc: "• <strong>계획관리지역 / 성장관리계획구역(산업)</strong><br>• 건폐율/용적률 인센티브 및 다양한 업종 입주가 가능한 효율적인 용도지역입니다." },
                        ],
                        // 입지 관련 지도나 도로 이미지를 넣으면 좋습니다
                        imgUrl: "https://i.ibb.co/gLbhwqsD/20251213-132415.png",
                        imgCaption: "※ 사업지 위치 및 교통망도"
                    }
                },

                // 5. 시설 분석 (Facility Analysis) - 분리됨
                {
                    type: 'split_list_img', 
                    header: { section: "Ⅲ. 시설 분석", title: "건축물 층별 상세 현황" }, 
                    data: {
                        items: [
                            { title: "1층: 제조 특화 (448평)", desc: "• <strong>클린룸(300평)</strong>: 유효층고 3.5m, 10,000 Class 스펙 보유<br>• <strong>창고(150평)</strong>: 층고 6m, 호이스트(1.9T) 설치로 중량물 이동 용이" },
                            { title: "2층: 업무 및 연구 (294평)", desc: "• 사무실, 기업부설연구소, 접견실, 휴게실, 탕비실 완비<br>• 공간 효율을 극대화한 레이아웃 구성" },
                            { title: "설비 및 인테리어", desc: "• <strong>전력 900kW</strong> 인입 완료 (대용량)<br>• 시스템 에어컨 및 최고급 인테리어 마감으로 즉시 업무 가능" }
                        ],
                        // 건물 내부/외부 사진을 넣으면 좋습니다
                        imgUrl: "https://i.ibb.co/ycjTFCLS/image.webp", 
                        imgCaption: "※ 층별 시설 및 내부 전경"
                    }
                },

                // 6. 상세 스펙 요약 (시설 분석의 연장)
                {
                    type: 'double_card',
                    header: { section: "Ⅲ. 시설 분석", title: "건축물 대장 및 유틸리티 요약" },
                    data: {
                        left: {
                            icon: "🏢", title: "건축 개요 (Summary)",
                            highlightBox: { label: "사용 승인일", value: "2015. 05. 06" },
                            list: ["<strong>일반철골구조</strong> ", "건폐율 35.85% (법정 40%)", "용적률 59.18% (법정 100%)", "주차 및 넓은 야적장 "],
                            note: { title: "Maintenance", desc: "주차 및 넓은 야적장 보유" }
                        },
                        right: {
                            icon: "⚙️", title: "핵심 설비 (Utility)",
                            highlightBox: { label: "특화 설비", value: "900kW + 300평 CR" },
                            list: ["<strong>대용량 전력 900kW</strong> 확보", "호이스트 1.9톤 1기", "상수도 인입 완료"],
                            tag: "즉시 공장 가동 가능 (Turn-key)",
                            note: { title: "Cost Saving", desc: "클린룸/전력 설비 승계로 초기 투자비 절감" }
                        }
                    }
                },
                // 7. 결론
                {
                    type: 'conclusion',
                    data: {
                        title: "성공적인 비즈니스를 위한<br>최적의 클린룸 공장",
                        desc: "전력 900kW, 300평 규모의 클린룸, 향남IC 5분의 입지.<br>즉시 가동 가능한 귀한 급매물입니다.",
                        
                        // 회사 정보
                        companyName: "더케이부동산중개법인 주식회사",
                        companyAddress: "경기도 화성시 동탄광역환승로 62, 삼정그린코아 더시티 408~9호",
                        registrationNum: "41590-2024-20116",
                        ceoName: "김영민",
                        companyPhone: "031-8043-5250",
                        
                        // 담당자 정보
                        contactTitle: "귀개리 공장 담당자 연결",
                        mobile: "010-4923-5227",
                        email: "developer@koreaplan.kr",
                        contactPerson: "(주) 케이플랜 그룹 기획 담당: 황교재 이사"
                    }
                }
            ]
        };