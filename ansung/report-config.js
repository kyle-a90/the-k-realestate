// ==================================================================================
// 📋 보고서 설정 파일 (REPORT_CONFIG)
// ==================================================================================
// 이 파일을 수정하여 보고서 내용을 변경할 수 있습니다.
// HTML 파일을 수정하지 않고도 보고서 데이터를 관리할 수 있습니다.
// ==================================================================================

const REPORT_CONFIG = {
    settings: {
        password: "1218", // 필요시 변경하세요
        naverMapId: "", // 네이버 지도 API Client ID가 있다면 입력 (없으면 이미지로 대체됨)
        pageTitle: "안성 가유 일반산업단지 입지 및 투자 타당성 분석",
        copyright: "COPYRIGHT © 2025 K-TECHNO VALLEY. ALL RIGHTS RESERVED.",
        // 테마 설정: "dark-blue" 또는 "white"
        theme: "white" // "dark-blue" 또는 "white"로 변경 가능
    },
    
    pages: [
        // 1. 표지: 전문적인 타당성 검토 보고서 스타일
        {
            type: 'cover',
            data: {
                recipient: "귀사 제안",
                proposalLabel: "SITE ACQUISITION FEASIBILITY REPORT",
                title: "안성 가유 일반산업단지<br>입지 및 투자 타당성 분석",
                subtitle: "수도권 남부 반도체 클러스터 핵심 배후 거점",
                desc: "화학(C20)·금속(C25) 입주 확정 / <strong class='text-cyan'>평당 197만 원</strong> 가격 경쟁력 확보",
                authorLabel: "제안사",
                proposer: "(주)K-Techno Valley / 한솔아이원스(주)",
                date: "2025. 04.",
                code: "CONFIDENTIAL REP-2025-04"
            }
        },

        // 2. 사업지 개요: 객관적 스펙 명시 (Fact Sheet)
        {
            type: 'split_map',
            header: { section: "Ⅰ. 사업지 개요", title: "Project Overview (Fact Sheet)" },
            data: {
                list: [
                    { label: "사업명", value: "안성 가유 일반산업단지 조성사업", highlight: true },
                    { label: "위치", value: "경기도 안성시 고삼면 가유리 777-1번지 일원" },
                    { label: "총 면적", value: "109,435㎡ (약 33,104평)" },
                    { label: "용도지역", value: "일반산업단지 (건폐율 70% / 용적률 350%)" },
                    { label: "공급가", value: "평당 197만 원 (수도권 최저 수준)", color: "text-cyan" }
                ],
                address: "경기도 안성시 고삼면 가유리 777-1",
                mapImageUrl: "https://i.ibb.co/gLbhwqsD/20251213-132415.png",
                naverMapUrl: "https://map.naver.com/v5/search/경기도 안성시 고삼면 가유리 777-1"
            }
        },

        // 3. 핵심 지표 (KPI): 전략적 가치 강조
        {
            type: 'grid_kpi',
            header: { section: "Ⅰ. 사업지 개요", title: "Key Strategic Indicators" },
            data: {
                cards: [
                    { icon: "🏭", title: "SCARCITY", value: "C20/25", unit: "코드", desc: "화학/금속 업종 허가", sub: "수도권 내 인허가 희소성 극대화", color: "blue-500" },
                    { icon: "🏗️", title: "EFFICIENCY", value: "350", unit: "%", desc: "압도적 용적률 확보", sub: "토지 활용도 최상 (건폐율 70%)", color: "cyan-400" },
                    { icon: "📉", title: "VALUATION", value: "197", unit: "만원", desc: "확실한 가격 우위", sub: "인근 시세 대비 40~60% 수준", color: "emerald-500" },
                    { icon: "🛣️", title: "ACCESS", value: "5.8", unit: "km", desc: "고삼IC 접근성", sub: "세종-포천고속도로 10분 내 진입", color: "indigo-500" }
                ]
            }
        },

        // 4. 업종 분석 (핵심): C20, C25 강조 및 전체 코드 나열
        {
            type: 'double_card',
            header: { section: "Ⅱ. 입주 여건 분석", title: "입주 가능 업종 (Industry Codes)" },
            data: {
                left: {
                    icon: "⭐", title: "Strategic Merit (핵심 희소 업종)",
                    highlightBox: { label: "규제 극복", value: "C20 / C25 입주 확정" },
                    list: [
                        "<strong>C20 화학물질 및 화학제품</strong> (의약품 제외)",
                        "<strong>C25 금속가공제품</strong> (기계 및 가구 제외)",
                        "수도권 과밀억제권역 내 인허가 난이도 최상 업종",
                        "환경오염 저감 대책 및 오폐수 처리 인프라 완비"
                    ],
                    note: { title: "Scarcity Value", desc: "경기 남부권 신규 산단 중 화학/금속 처리가 가능한 부지는 극히 제한적임." }
                },
                right: {
                    icon: "📋", title: "General Manufacturing (일반 제조)",
                    highlightBox: { label: "첨단 제조 특화", value: "반도체 소부장 밸류체인" },
                    list: [
                        "C26 전자부품/컴퓨터/통신장비, C27 의료/정밀/광학기기",
                        "C28 전기장비, C29 기타 기계 및 장비",
                        "C30 자동차/트레일러, C31 기타 운송장비",
                        "C33 기타제품, D35114 태양력 발전업"
                    ],
                    tag: "다양한 제조 업종 수용 가능",
                    note: { title: "Cluster Effect", desc: "삼성/SK 반도체 클러스터 배후 지원을 위한 최적의 업종 포트폴리오 구성." }
                }
            }
        },

        // 5. 입지 분석: 물류 및 배후 수요
        {
            type: 'split_list_img',
            header: { section: "Ⅲ. 입지 환경 분석", title: "Logistics & Cluster Network" },
            data: {
                items: [
                    { title: "반도체 클러스터 연계성", desc: "• <strong>용인 반도체 국가산단(삼성) 13km</strong>, 용인 반도체 클러스터(SK) 14km 인접.<br>• K-반도체 벨트의 핵심 배후 생산 기지로 기능하며 물류 이동 최적화." },
                    { title: "광역 교통망 인프라", desc: "• <strong>세종-포천고속도로 고삼IC 5.8km</strong> (차량 10분 내 진입).<br>• 반도체 고속도로(계획) 및 평택-부발선 철도 추진에 따른 미래 접근성 향상 기대." },
                    { title: "배후 도시 및 인력 수급", desc: "• 안성시 반도체 소부장 특화단지 지정 및 인근 이동읍 신도시 개발.<br>• 직주근접 환경 개선 및 전문 기술 인력 확보 용이." },
                ],
                imgUrl: "https://i.ibb.co/gLbhwqsD/20251213-132415.png",
                imgCaption: "※ 사업지 광역 교통망 및 주요 산업단지 위치도"
            }
        },

        // 6. 경제성 분석: 가격 비교 차트
        {
            type: 'chart_economy',
            header: { section: "Ⅳ. 경제성 분석", title: "Comparative Market Analysis" },
            data: {
                chartTitle: "인근 주요 산업단지 평당 분양가 비교 (단위: 만원)",
                chartLabels: ["본 사업지", "평택/화성 일반산단", "용인 원삼/남사 인근"],
                chartData: [197, 350, 500],
                chartDesc: "인근 시세 대비 <span style='color: var(--theme-text-primary);'>확실한 가격 우위</span> 확보",
                capexList: [
                    { label: "용인 반도체 클러스터 인근", price: "약 500만/평", style: "" },
                    { label: "안성 가유 산단 (본 건)", price: "197만/평", style: "accent" },
                    { label: "예상 시세 차익", price: "확실한 Safety Margin", style: "text-emerald-400" }
                ],
                notes: [
                    { title: "Value Proposition", desc: "토지비 절감을 통해 건축 및 설비 투자(CAPEX) 여력 확보 가능하며, 향후 지가 상승에 따른 자본 이득(Capital Gain) 기대." },
                    { title: "Incentives", desc: "법인세 4년간 100% 감면(과밀억제권역 이전 시), 취득세 75% 감면 등 강력한 세제 혜택 지원." }
                ]
            }
        },

        // 7. 결론: 요약 및 제안
        {
            type: 'conclusion',
            data: {
                title: "성공적인 기업 확장을 위한<br>전략적 자산 취득 제안",
                desc: "C20/C25 희소 업종의 인허가 가치와 197만 원의 경제성을 동시에 확보하십시오.<br>귀사의 합리적인 의사결정을 기대합니다.",
                
                // 회사 정보
                companyName: "(주)K-Techno Valley",
                companyAddress: "경기도 안성시 고삼면 가유리 777-1번지 일원 (현장 사무소)",
                registrationNum: "분양 대행사",
                ceoName: "대표이사",
                companyPhone: "-",
                
                // 담당자 정보
                contactTitle: "분양 문의 (Contact)",
                mobile: "010-XXXX-XXXX", // 실제 전화번호로 수정하세요
                email: "contact@email.com" // 실제 이메일로 수정하세요
            }
        }
    ]
};


