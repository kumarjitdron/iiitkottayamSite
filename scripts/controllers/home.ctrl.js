// Set the date we're counting down to
var countDownDate = new Date("Aug 27, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = days + "days " + hours + "hours " +
        minutes + "minutes " + seconds + "seconds ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

angular.module("app").controller("homeController", function($scope, $rootScope, $timeout) {
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function() {
            $scope.$apply(function() {
                $rootScope.activeTab = 'home';
            });
        }, $rootScope.tabDelay);
        $('.tooltipped').tooltip();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true
        });

        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 4000);
        }
        autoplay();
        $('#sideEvents').css("height", "350px");
        $('.slider').slider({
            transition: 700,
            interval: 8000,
            indicators: false
        });
        var carousel = $('#sideEvents').carousel();
        if (typeof window.ontouchstart !== 'undefined') {
            carousel.off('touchstart.carousel');
        }
        carousel.off('mousedown.carousel');
    });

    var newsList = [{
            text: "Application for Junior Research Fellow (JRF)",
            link: '#!/jrf_advt',
            new: 1,
        },
        {
            text: "Rolling advertisement for various faculty positions-Click here to apply",
            link: 'https://recruitf.iiitkottayam.ac.in/',
            new: 1,
        },

        {
            text: "THE 4th INTERNATIONAL CONFERENCE ON INNOVATIVE TRENDS IN INFORMATION TECHNOLOGY (ICITIIT'23)",
            link: 'http://icitiit23.iiitkottayam.ac.in',
            new: 1,
        },
        {
            text: "List of candidates provisionally selected for the PhD admission January 2023",
            link: 'data/pdf/pscphd2023.pdf',
            new: 0,
        },

        {
            text: "List of provisionally selected candidates for the M.Tech programme for working professionals (January-2023)",
            link: 'data/pdf/SelectionList-MTech-Jan2023.pdf',
            new: 0,
        },



        {
            text: "Registration for the EVEN Semester 2022-2023(Jan-April)",
            link: 'data/pdf/evensem_22_23.pdf',
            new: 0,
        },





        {
            text: "Registration for the ODD Semester 2022-2023(Semester III -  Batch 2021)",
            link: 'data/pdf/odd_21_sem_3.pdf',
            new: 0,
        },

        {
            text: "Registration for the ODD Semester 2022-2023(MWP and PhD)",
            link: 'data/pdf/odd22_mtech_phd.pdf',
            new: 0,
        },

        /*{
             text:"Registration for the ODD Semester 2022-2023(Semester V -  Batch 2020)",
            link:'data/pdf/odd_20_sem5.pdf',new:0,
},


.
 { text:"Recruitment Notification for Non-Teaching Staff",
       link:'https://recruitstaff.iiitkottayam.ac.in/',new:1,
},
{ text:"Result-Empanelment/Recruitment of STA (N/W) and Sr. Programmer against  Institute notification No. IIITK/01/12/2022-23/325/1 dated 17.11.2022",
       link:'data/pdf/Result Notification.pdf',new:1,
},
         { text:"List of candidates provisionally shortlisted for the Interview (Online)-PhD(January-2023)",
          link:'data/pdf/Shortlisted_phd_jan2023.pdf',new:1,
},
 {
             text:"Online applications are invited for admission to the Doctor of Philosophy (PhD) programme starting in January 2023",
            link:'https://phdr.iiitkottayam.ac.in/',new:1,
},
{
             text:"Empanelment / Recruitment of Sr. Programmer/Sr. Technical Assistant on contract. Apply online- Last date:- 23/11/2022, 5.00 PM",
            link:'https://recruitstaff.iiitkottayam.ac.in/',new:1,
},
{
             text:"Online applications are invited for the Adhoc Faculty position in CSE /IT & IT/Electronics - Interdisciplinary Areas,Last Date : 14th Oct. 2022,5.00PM",
             link:'https://adhocrecruit.iiitkottayam.ac.in/',new:1,
 },
 	{ text:"Result of Ad-hoc Faculty Recruitment against the Advt. No. IIITK/01/18/2022-23/258 dated 08.10.2022",
            link:'data/pdf/adhoc_20_10.pdf',new:1,
},
	{ text:"Reporting Instructions for JoSAA/CSAB/DASA Admission 2022",
            link:'#!/admission22',new:1,
},
{ text:"Result of Recruitment of Chief Innovation Officer-cum-In-charge, Certificate Programme",
            link:'data/pdf/result_cio.pdf',new:0,
},
{ text:"List of provisionally selected candidates for the M.Tech Programme for Working Professionals (Aug 2022)",
            link:'data/pdf/mtechaug22_selected.pdf',new:0,
},
{ text:"List of provisionally selected candidates for the PhD Admission- August 2022",
            link:'data/pdf/selelistphd.pdf',new:0,
},

	{ text:"Notice inviting offers for Hiring of Buildings for IIIT K-2022-23",
            link:'#!tenders',new:1,
},
{ text:"Result of Ad-hoc Faculty Recruitment against the Advt. No. IIITK/01/25/2022-23/91-1 dated 08.06.2022",
            link:'data/pdf/adhoc_fac_22.pdf',new:0,
},

	{
             text:"SERB Sponsored - High – End Workshop on 18 – 24 July, 2022",
            link:'data/pdf/serb_workshop.pdf',new:0,
},

{ text:"Recruitment of Chief Innovation Officer-cum-In-charge, Certificate Programme",
            link:'data/pdf/cio_icp.pdf',new:1,
},
         { text:"List of provisionally shortlisted candidates for the interview-PhD(August-2022)",
            link:'data/pdf/Writtentest_website.pdf',new:1,
},

       {
             text:"Result of Faculty Recruitment against the Advt. No. Admn/ 07/ FAC/4/ IIITK/ 2021-22 dated 12.07.2021.",
            link:'data/pdf/fac_result_22.pdf',new:0,
},

	{
             text:"Online applications are invited for online internship programme - June-2022",
            link:'https://internship.iiitkottayam.ac.in/',new:0,
},

         {
             text:"List of shotlisted candidates as Guest faculty vide notification Ref. No. IIITK/01/25/2021-22 dated 23.12.2021.",
            link:'data/pdf/list_publish.pdf',new:0,
},
        {
             text:"List of provisionally selected candidates as Adhoc faculty vide notification Ref. Advt. No. IIITK/01/18/2021-22 dated 8th Dec.2021",
            link:'data/pdf/Website_adhoc-result.pdf',new:0,
},

    {        text:"List of provisionally selected candidates for the PhD Admission- January 2022",
            link:'data/pdf/PhD Selected Candidate.pdf',new:0,
},
      {
                text:"M.Tech - List of provisionally shortlisted candidates for admission",
                link:'data/pdf/MWP-SelectionList-Jan2022(1).pdf',new:0,
    },




{
             text:"Registration for the Even Semester 2022 (Jan-May) ",
            link:'data/pdf/211130162907_0001.pdf',new:0,
},




     {
             text:"Empanelment / Recruitment of Programmer/Technical Assistants on contract. Last date:- 18/04/2022, 5.00PM",
            link:'https://recruitstaff.iiitkottayam.ac.in/',new:1,
},
      {
             text:"Call letters have been sent to all shortlisted candidates against the Institute advertisement No.Admn./07/FAC/4/IIITK/2021-22 dated 12.07.2021",
            link:'data/pdf/notification-AP-I - II-info.pdf',new:0,
},
    {
	     text:"Addendum : Designing, Supplying and Installation of a 200 KLD Inline Pressure Water Treatment System . Last Date Extended To: 10/03/2022",
            link:'#!tenders',new:1,
},
	 {
	     text:"Notice Inviting Quotation for Supply and Fixing of Desklet handwriting Pad on Existing Chair in Seminar Hall. Last Date: 18/02/2022",
            link:'#!tenders',new:0,
},
    {

            text:"Applications are invited for the faculty positions,Last Date : 03/01/2022 Click here for details",
            link:'data/pdf/ADVT_WEB_SIG.pdf',new:1,
},
     {
            text:"Online applications are invited for the faculty position in CSE /IT / Mathematics - Interdisciplinary Areas,Last Date : 24th Dec. 2021,5.00PM",
            link:'https://adhocrecruit.iiitkottayam.ac.in/',new:1,
},
    {
             text:"Online applications are invited for admission to the Doctor of Philosophy (PhD) programme starting in January 2022",
            link:'https://phdr.iiitkottayam.ac.in/',new:1,
},
{
             text:"A walk in interview for the post of psychologist (on contract),Date: 22nd Dec. 2021 at 09.30 am",
            link:'data/pdf/recru_ psycholigst-noti.pdf',new:1,
},
 {
             text:"Empanelment / Recruitment of Technical Assistants / Junior Superintendent on contract. Last date:- 10/12/2021, 5.00PM",
            link:'https://recruitstaff.iiitkottayam.ac.in/',new:1,
},

// 	{
//              text:"DETAILS OF ADMISSION PROCESS FOR FIRST SEMESTER B.TECH 2020-21",
//             link:'#!admission21',new:1,
// },


 {
             text:"Online applications are invited for online internship programme - 2021",
            link:'https://internship.iiitkottayam.ac.in/',new:1,
},

{
             text:"IIIT Kottayam Faculty Development Programmes and webinars",
            link:'https://iiitkottayam.ac.in/#!/fdp_webinar',new:1,

},

{
             text:"THE 3rd INTERNATIONAL CONFERENCE ON INNOVATIVE TRENDS IN INFORMATION TECHNOLOGY (ICITIIT'22)",
            link:'http://icitiit22.iiitkottayam.ac.in',new:1,
},
{
           text:"List of provisionally selected candidates for Spot admission M.Tech August 2021",
          link:'data/pdf/MWP-SPOT-Selection-Result.pdf',new:0,
}






{
           text:"Recruiters corner",
          link:'https://iiitkottayam.ac.in/data/pdf/recruiterscorner.pdf',new:1,
},
{
             text:"List of provisionally selected candidates as Adhoc faculty vide notification Ref. Advt. No.Admn /05/HR/IIITK/2021-22, dated 21st Oct.2021",
            link:'data/pdf/Website_adhoc publishing.pdf',new:1,
},
 {
            text:"Applications are invited for the faculty position in CSE /IT / Mathematics - Interdisciplinary Areas,Last Date : 02/11/2021,5.00PM",
            link:'https://adhocrecruit.iiitkottayam.ac.in/',new:1,
},
	{
             text:"List of provisionally selected candidates for (ECE)- PhD Admission 2021",
            link:'data/pdf/ece_selected.pdf',new:0,
},
	{
             text:"List of provisionally selected candidates for (CSE)- PhD Admission 2021",
            link:'data/pdf/cse_selected.pdf',new:0,
},
{
             text:"List of provisionally selected candidates as Adhoc faculty vide notification Ref. No. Adm/05/HR/IIITK/2021-22",
            link:'data/pdf/Adhoc 07082021.pdf',new:1,
},

        {
            text:"Applications are invited for the faculty position in CSE/IT and Mathematics",
            link:'https://recruitf.iiitkottayam.ac.in/',new:1,
},

{
            text:"Applications are invited for the faculty position in CSE and ECE ,Last Date : 03/08/2021,5.PM",
            link:'https://adhocrecruit.iiitkottayam.ac.in/',new:1,
},
{
             text:"List of provisionally selected candidates for admission in M.Tech for Working Professionals - Aug 2021.",
            link:'data/pdf/MTechf21.pdf',new:1,
},
	{
             text:"List of provisionally shortlisted candidates for the 2nd Round Interview (CSE)- PhD Admission 2021",
            link:'data/pdf/phd21round2.pdf',new:0,

},
	{
             text:"List of provisionally shortlisted candidates for the interview - PhD Admission 2021",
            link:'data/pdf/phd21shortlisted.pdf',new:0,

},
	{
             text:"Information Related To PhD Admission 2021",
            link:'#!phd2021info',new:0,

},
	{
             text:"Notification on Publish of Innovation and Entrepreneurship Policy by the HEI",
            link:'data/pdf/nisp.pdf',new:0,

},
	{
             text:"IEEE SB IIIT Kottayam 1st Year Anniversary Newsletter",
            link:'data/pdf/ieeenewsletter1.pdf',new:0,

},
{
	     text:"Hearty Congratulations to Dr. Jayakrushna Sahoo, Assistant Professor, IIIT-Kottayam for the Best Paper Award in the IEEE sponsored 3rd IEEE ICSPC'21",
            link:'',new:0,
},
        {
             text:"Applications are invited for online internship programme - 2021",
            link:'https://internship.iiitkottayam.ac.in/',new:0,
},

	{
             text:"Applications are invited for admission to the Doctor of Philosophy (PhD) programme starting in August 2021",
            link:'https://iiitkottayam.ac.in/#!/phd_home',new:0,
},
{
	     text:"MoU with Atal Incubation Centre- IIITK Foundation & Aster Digital Health Incubator",
            link:'#!mou1',new:0,
},


	{
             text:"THE 2ND INTERNATIONAL CONFERENCE ON INNOVATIVE TRENDS IN INFORMATION TECHNOLOGY (ICITIIT'21)",
            link:'http://icitiit21.iiitkottayam.ac.in',new:0,
},



{
	     text:"Basic Protective Measures Against The New Corona Virus",
            link:'#!pdf/home/COVID-19/Protective Measures',new:0,
},


{
             text:"List of provisionally selected candidates as Adhoc faculty in Computer Science and Engineering",
            link:'data/pdf/adhocresult.pdf',new:1,
},
{
             text:"Registration for the  2nd Semester 2020-21 Admission",
            link:'data/pdf/registration21.pdf',new:0,
},
{
             text:"Registration for the Even Semester 2021(Jan-May)",
            link:'data/pdf/regeven2021.pdf',new:0,
},
{ text:"Applications are invited for the faculty position in Mathematics(Adhoc)",
            link:'https://adhocrecruit.iiitkottayam.ac.in/',new:1,
},

{
             text:"Spot admission for M.Tech Admission Jan 2021-registration opens ",
            link:'https://mtechwp.iiitkottayam.ac.in/',new:0,
},
{
             text:"Applications are invited for the post of Medical Officer (on contract), Last date 29/12/2020,5pm)",
            link:'data/pdf/MONotification.pdf',new:0,
},
	{
             text:"Adhoc Faculty - Online Interview on 23rd December 2020",
            link:'data/pdf/fachr2021.pdf',new:0,
},

	{
             text:"Indo-European Hackathon event on Nov. 27-29, 2020. Register Here",
            link:'http://icentre.iiitkottayam.ac.in/hacks2020.html',new:0,
},
{

             text:"ATAL FDP on Cyber Security and Digital Forensics from December 1-5, 2020",
            link:'data/pdf/ATAL FDP Brochure-Cyber Security-IIITkottayam.pdf',new:0,
},
{

             text:"ATAL FDP on Internet of Things:Hardware, Software and Applications from December 7-11, 2020",
            link:'data/pdf/IIITK_FDP_Dec7to11.pdf',new:0,
},

 {
             text:"DETAILS OF ADMISSION PROCESS FOR FIRST SEMESTER B.TECH 2020-21",
            link:'#!admission20',new:0,
},
	{
             text:"Admission Opens for M.Tech Programme-January 2021 (Working Professionals)",
            link:'http://mtechwp.iiitkottayam.ac.in/',new:0,
},
         {
              text:"AICTE sponsored FDP is scheduled from 14.9.2020 to 18.9.2020 on the topic IOT CLOUD BASED INNOVATIVEODUCT DEVELOPMENT",
             link:'http://icentre.iiitkottayam.ac.in/iotfdp.html',new:0,
 },
 {	     text:"Selected list for M.Tech (Spot admission) for Working Professionals(August 2020)",
            link:'#!mtechspot',new:0,
},
{
	     text:"IIIT Kottayam invites applications for recruitment to the faculty position Assistant Professor-Grade-I (Mathematics)",
            link:'http://recruitf.iiitkottayam.ac.in/',new:1,
},

	{
	     text:"Selected list for admission PhD(2020)",
            link:'#!phd20select',new:0,
},

	{
	    text:"Registration for the Odd Semester 2020(August-December)",
             link:'data/pdf/regodd20.pdf',new:0,
 },

 {
	     text:"Webinar Series On Entrepreneurship, Technology & Socially Relevant Topics",
            link:'#!webinar',new:0,
 },


 {
 	     text:"IIIT Kottayam observed Yoga Day",
             link:'#!idy2020',
},

 {
 	     text:"IIIT Kottayam invites application for Summer Internship-2020",
             link:'https://www.iiitkottayam.ac.in/interns/',
 },

{
  text:"iDEX Defence India Startup Challenge (DISC virtual roadshow). Individual innovators are invited (Grant upto Rs. 1.5 crores for winners). Join us on 9.11.2020 (3:45 to 5:00 PM).",
  link:'',new:1,
},
{
             text:"ATAL FDP from November 4 to 8, 2020",
            link:'data/pdf/BROCHURE-FDP.pdf',new:1,
},

    {
	     text:"TECHSEMBLE-Experience the Harmony - a series of events for UG students across India on 8-9 Aug. Register before 4th Aug 2020 ",
            link:'http://ieeeiiitk.herokuapp.com/',new:1,
},

	 {
	     text:"Tender Notice for Furnishing Double Bedded Girls Hostel at IIIT Kottayam",
            link:'https://www.iiitkottayam.ac.in/#!/tenders/liveTenders',new:1,
},

		 {
	     text:"Selected list for admission M.Tech for Working Professionals(August 2020)",
            link:'#!mtech20final',new:1,
},


		 {
	     text:"Hearty Congratulations to Dr. Ebin Deni Raj, Assistant Professor, IIIT-Kottayam selected as an ACM Distinguished Speaker in Data Science by ACM",
            link:'',
},
		 {
	     text:"IIIT Kottayam invites online application for PhD Programme. Last Date:10th June 2020",
            link:'https://www.iiitkottayam.ac.in/phd/',new:1,
},

		 {
	     text:"Notice Inviting offers for Hiring of buildings for Hostel",
            link:'#!pdf/home/hostel_advt_2020/Quotation Notice',
},
		 {
	     text:"Quotation Notice for Printing of Answer Booklet. Last Date extended to May 27",
            link:'#!pdf/home/retender2_answerbooklet/Quotation Notice',new:1,
},
		 {
	     text:"Result of Faculty Recruitment against the Adv.No. Admn/07/Fac/2/IIITK/2019-20 ",
            link:'#!pdf/home/fac_result/Faculty Recruitment Result',new:0,
},
		 {
	     text:"Quotation notice for Printing of Answer Booklet.Last Date extended to April 17",
            link:'#!pdf/home/retender_answerbooklet/Quotation Notice',new:1,
},{
	     text:"Hearty Congratulations to Dr. V. Panchami, Assistant Professor, IIIT Kottayam for publishing research paper on An Efficient Dynamic Symmetric Cipher to Enable End to End Secure Communication in SPRINGER Journal Artificial Intelligence and Evolutionary Computations in Engineering System",
            link:'https://link.springer.com/chapter/10.1007/978-981-15-0199-9_28?fbclid=IwAR0JZznq-Ep9DfAC2i5ivTlnJUapzs9b3lgw8sVeUwotMDH0NDsG9ujA64U',
},

{
	     text:"Faculty Recruitment against the Adv.No. Adm/07/Fac/2/IIITK/2019-20 ",
            link:'https://iiitkottayam.ac.in/views/facrsel.html',
},
{
	     text:"Procurement of Desktop PCB Milling Machine",
            link:'#!pdf/home/tenderpcb/Quotation Notice',new:1,
},

        {
	     text:"Hearty Congratulations to Dr. Victer Paul, Assistant Professor, IIIT Kottayam for publishing a research paper on SOFTCOMPUTING.A SPRINGER NATURE journal indexed by SCIE with impact factor 2.784. More details..",
            link:'https://link.springer.com/article/10.1007/s00500-020-04712-2',new:1,
},

{
	     text:"Hearty Congratulations to Dr. Ebin Deni Raj, Assistant Professor, IIIT-Kottayam, for publishing research paper in prestigious IEEE TRANSACTIONS on Computational Social Systems",
            link:'https://ieeexplore.ieee.org/document/8977552',new:1,
},
{
	     text:"MoU Signed with Technolodge",
            link:'#!mou',
},
{
	     text:"ARIIA Report 2019-20",
            link:'data/pdf/ARI-U-0802-Report.pdf',
}

{
	     text:"IEEE-ICITIIT20 - Feb 13 & 14 2020.",
            link:'http://icitiit20.iiitkottayam.ac.in',new:1,
},

{
	     text:"Executive M.Tech-2020(Short List-Provisional)",
            link:'views/mtechse.html',
},

{
	    text:"PhD Registration for the Even Semester 2020(Jan-April)",
            link:'#!pdf/home/phdreg20/PhD Registration',
},
{
	    text:"Registration for the Even Semester 2020(Jan-April)",
            link:'data/pdf/reg20.pdf',
},

{
	     text:"Quotation notice for Printing of Answer Booklet and Additional Sheet.",
            link:'#!pdf/home/tenderAnswersheet/Quotation Notice',new:1,
},


{
	    text:"DST-NIMAT sponsored IoT Cloud Industrial Training for entrepreneurial aspirants (6 weeks). APPLY NOW! ",
            link:'http://icentre.iiitkottayam.ac.in/dstnimat2019.html',new:1,
},
{
	    text:"Dr. Shajulin Benedict organizes a Special Issue in Internet of Things Journal (Elsevier)",
            link:'https://www.journals.elsevier.com/internet-of-things/call-for-papers/special-issue-on-scalable-and-secure-iot-using-cloudfogedge',new:1,
},


{
            text:"Pay Your Fees Online",
            link:'https://www.onlinesbi.com/sbicollect/icollecthome.htm',
},
{
	    text:"Admission 2019 CSAB Special Round & DASA - Details",
            link:'#!admission19',
},
{
	    text:"Correction Done By Editor On Misleading Information",
            link:'data/pdf/news1.pdf',new:1,
},

{
            text:"Public Notice- New admissions",
            link:'#!pdf/home/Admission_Public_notice/Public Notice',
},

{
            text:"Registration for the ODD Semester 2019 (July-December)",
            link:'#!pdf/home/notice/Registration',
},



{
            text:"Students Affidavit for CSAB Special Round",
            link:'data/pdf/Affadvit.pdf',new:1,
},
{
            text:"Faculty Recruitment 2019-Online Applications are invited",
            link:'http://www.iiitkottayam.ac.in/facr2019/',new:1,
},
{
            text:"Summer course on IoT Cloud from 17 June to 1 July for students/academia/industry -- Registrations are open",
            link:'http://icentre.iiitkottayam.ac.in/summercourse19.html',new:1,
},

{
            text:"JoSAA 2019 Candidate Registration & Choice Filling",
            link:'https://josaa.nic.in/counseling/root/Candidatelogin.aspx',
},

*/

    ];

    this.additionalText = function() {
        $('#moreText').toggle(100);
        $('#showMore').toggle();
        $('#showLess').toggle();
    };
    this.newsList = newsList;
    var faculty = [{
            name: 'Dr. Shajulin Benedict',
            designation: 'Assistant Professor',
            area: ['Cloud Computing', 'IoT', 'Supercomputers', 'Parallel Compilers'],
            photo: 'shajulin.jpg'
        },
        {
            name: 'Dr. Bakkyaraj T',
            designation: 'Assistant Professor',
            area: ['Nonlinear Differential Equations'],
            photo: '7BEAA1E0E47C4DD4D7E44D98B2B85388.jpg'
        },


        {
            name: 'Dr. Panchami',
            designation: 'Assistant Professor',
            area: ['Cryptography', 'Data Security', 'Blockchain Technology', 'Lightweight Cryptography(IoT)'],
            photo: 'panchami.jpg'
        },
        {
            name: 'Dr. Arun Cyril Jose',
            designation: 'Assistant Professor',
            area: ['Smart Home Security', 'Device Fingerprinting', 'Logical Sensing from a Security Point of View', 'Behaviour Prediction from a Security Point of View', 'Different Surveillance Techniques', 'Security Based Social Engineering', 'Completely Anonymous Communication over the Internet'],
            photo: 'arun.jpg'
        },

        {
            name: 'Dr. Bibal Benifa',
            designation: 'Assistant Professor',
            area: ['Cloud Computing and security', 'Big data analytics', 'Image Processing', 'Machine Learning'],
            photo: 'bibal.jpg'
        },

        {
            name: 'Dr. P. Victer Paul',
            designation: 'Assistant Professor',
            area: ['Bio-Inspired Optimization', 'Computer Networks', 'Cloud Computing', 'Data Analytics', 'Web Technologies'],
            photo: 'victer.jpg'
        },
        {
            name: 'Dr. Jayakrushna Sahoo',
            designation: 'Assistant Professor',
            area: ['Data Mining', 'Machine Learning', 'Cryptography (Digital Water Marking)'],
            photo: 'sahoo.jpg'
        },
        {
            name: 'Dr. Kala S',
            designation: 'Assistant Professor',
            area: ['VLSI and Embedded Systems', 'Reconfigurable Architectures', 'ASIC Design'],
            photo: 'kala.jpg'
        },
        {
            name: 'Dr. Manjith B.C.',
            designation: 'Assistant Professor',
            area: ['Reconfigurable Computing', 'Hardware Security', 'FPGA'],
            photo: 'manjith.jpg'
        },
        {
            name: 'Dr. Koppala Guravaiah',
            designation: 'Assistant Professor',
            area: ['Internet of Things (IoT), Wireless Sensor Networks (WSN), MANETs'],
            photo: 'kgura.jpg'
        },
        {
            name: 'Dr. Ebin Deni Raj',
            designation: 'Assistant Professor',
            area: ['Social Network Analysis', 'Big Data Analytics', 'Sentimental Analysis', 'Social Media Analytics', 'Machine Learning', 'Data Science', 'Social Computing'],
            photo: 'ebin.jpg'
        },

        {
            name: 'Dr. M. P. Rajan',
            designation: 'Former Faculty',
            area: ['Machine Learning', 'Data Science Research', 'Parameter Identification in PDEs', 'Functional Analysis/Numerical Functional Analysis', 'Mathematical Finance/Financial Engineering'],
            photo: 'ebc6840e76699affa23d9c74f0f20016.jpg'
        },

        {
            name: 'Dr. Sasikumaran Sreedharan',
            designation: 'Adjunct Faculty',
            area: ['Real Time Systems', 'Software Quality', 'Sensor Networks and Quality', 'Education Management'],
            photo: 'sasikumaran.jpg'
        },
        {
            name: 'Dr. S. Vinaya Kumar',
            designation: 'Adjunct Faculty',
            area: ['English Language'],
            photo: 'vinaya.jpg'
        },
        {
            name: 'Dr. Antony Palackal',
            designation: 'Adjunct Faculty',
            area: ['Sociology of Science and Development', 'Social Movements', ' Cultural Dynamics and Gender and Society'],
            photo: '1C36E2FE5DB85F8FECDC9C0C64700DA1.jpg'
        },


        {
            name: 'Dr Boddepalli SanthiBhushan',
            designation: 'Assistant Professor',
            area: ['Micro/Nano-Electronics', 'Device Modelling – Electronic and Energy Devices', 'Graphene Supercapacitors'],
            photo: 'bhushan.png'
        },
        {
            name: 'Dr Divya Sindhu Lekha',
            designation: 'Assistant Professor',
            area: ['Computer Networks', 'Data Analytics'],
            photo: 'divya.png'
        }
    ];

    var publication = [{
            title: "Hybridization and Torsion Defects influenced Electron Transport in Trans-Polyacetylene",
            authors: ['KumarGaurav, BoddepalliSanthiBhushan, German Mino-Galaz, Gonzalo Gutierrez, AnuragSrivastava'],
            details: "https://doi.org/10.1016/j.physe.2021.114628"
        },
        {
            title: "Gaurav, K., SanthiBhushan, B., Mehla, R. et al. Investigating a Fluorobenzene Based Single Electron Transistor As a Toxic Gas Sensor. Journal of Elec Materi (2021).",
            authors: ['Dr Boddepalli SanthiBhushan'],
            details: "https://doi.org/10.1007/s11664-020-08663-0"
        },
        {
            title: "Image Restoration via Discrete Orthogonal Stockwell Transform and Total Variation Regularization",
            authors: ['Dr.Bini.A.A'],
            details: "digital-library.theiet.org/content/journals/10.1049/iet-ipr.2018.5504"
        },
        {
            title: "Flocking based Evolutionary Computation Strategy for measuring Centrality of Online Social Networks",
            authors: ['L.D Dhinesh Babu', 'Ebin Deni Raj'],
            details: "Applied Soft computing,Volume 58, Pages 495-516, Elsevier,2017"
        },
        {
            title: "Detecting modular and granular overlaps in Online Social Networks using Fuzzy-ART",
            authors: ['Ebin Deni Raj', 'L.D Dhinesh Babu'],
            details: "International journal of fuzzy systems, Volume 19, Issue 4, pp 1077–1092, Springer, 2017 "
        },
        {
            title: "A Firefly inspired Game Dissemination and QoS based Priority Pricing Strategy for Online Social Network Games",
            authors: ['Ebin Deni Raj', 'L.D Dhinesh Babu.'],
            details: "International Journal of Bio-Inspired Computation, Indesrcience Publishers,2017 "
        },
        {
            title: "Image despeckling and deblurring via regularized complex diffusion",
            authors: ['A. A. Bini'],
            details: "Signal, Image and Video Processing (Springer), Vol. 11, No. 6, pp.977-984, 2017"
        },
        {
            title: "Special Issue CFP on IoT Cloud Solutions for Societal Applications at Scalable Computing: Practice and Experience, Impact Factor Journal, 2019.",
            authors: ['Shajulin Benedict', 'M.Gerndt']
        },
        {
            title: "Performance Improvement Options of Scientific Applications on XeonPhi KNL Architectures",
            authors: ['Shajulin Benedict'],
            details: "Int. Journal of Knowledge, Engineering and Data Mining, Inderscience journals, 2018. (in press)"
        },
        {
            title: "Resource Allocation in Cloud Manufacturing using Bat Algorithm",
            authors: ['Brintha N.C', 'Shajulin Benedict', 'Winolyn J.'],
            details: "International Journal of Manufacturing Technology and Management, Inderscience publishers, 2018."
        },
        {
            title: "SCALE-EA: A Scalability Aware Performance Tuning Framework for OpenMP Applications",
            authors: ['Shajulin Benedict'],
            details: "Scalable Computing: Practice and Experience, Vol. 19, No.1, pp. 15-29, DOI 10.12694/scpe.v19i1.1390, (https://www.scpe.org/index.php/scpe/article/view/1390/525) 2018."
        },
        {
            title: "Monitoring IaaS using various cloud monitors, in Cluster Computing",
            authors: ['A Stephen', 'Shajulin Benedict', 'RPA Kumar'],
            details: "Springer, pp. 1-13, 2018."
        },
        {
            title: "Towards Automatic Compiler-assisted Performance and Energy Modeling for Message Passing Parallel Programs",
            authors: ['TF Philipp Gschwandtner', 'Alexander Hirsch', 'Shajulin Benedict'],
            details: "13th Workshop on Parallel Systems and Algorithms PASA 2018, Germany, 2018."
        },
        {
            title: "A survey on cloud-based solutions for cloud manufacturing",
            authors: ['NC Brintha', 'Shajulin Benedict'],
            details: "International Journal of Computer Aided Engineering and Technology, Vol. 10, No.1-2, pp.126-140, 2018."
        },
        {
            title: "TOEP: Threshold Oriented Energy Prediction Mechanism for MPI-OpenMP Hybrid Applications",
            authors: ['Shajulin Bendict', 'P.Gschwandtner', 'Thomas Fahringer'],
            details: "accepted in IEEE IC32018, Noida, India, 2018."
        },
        {
            title: "Prediction Assisted Runtime Based Energy Tuning Mechanism for HPC Applications",
            authors: ['Shajulin Bendict'],
            details: "accepted in Sustainable Computing, Informatics and Systems, Elsevier, 2018."
        },
        {
            title: "Revenue oriented air quality prediction microservices for smart cities",
            authors: ['Shajulin Bendict'],
            details: "IEEE Int. Conf. on Advances in Computing, Communications and Informatics (ICACCI), 2017."
        },
        {
            title: "A workflow runtime environment for manycore parallel architectures in Future Generation Computer Systems",
            authors: ['M Janetschek', 'R Prodan', 'S Benedict']
        },
        {
            title: "Special issue on energy reduction techniques for exa-scale computing: theory and practice",
            authors: ['S Benedict', 'M Gerndt', 'S Benkner'],
            details: "Computing 99 (8), 725-726, 2017."
        },
        {
            title: "Energy prediction of CUDA application instances using dynamic regression models in Computing",
            authors: ['RS Rejitha', 'S Benedict', 'SA Alex', 'S Infanto'],
            details: "Springer, Vol. 99 (8), pp. 765-790, 2017."
        },
        {
            title: "QoS-based Cloud Application Management: Approach and Architecture",
            authors: ['V Podolskiy', 'HM Gerndt', 'S Benedict'],
            details: "Proceedings of the 4th Workshop on CrossCloud Infrastructures & Platforms, 2017."
        },
        {
            title: "Computing Principles in Formulating Water Quality Informatics and Indexing Methods: An Ample Review ",
            authors: ['NR Blessing', 'S Benedict'],
            details: "Journal of Computational and Theoretical Nanoscience Vol. 14 (4), pp. 1671-1681, 2017."
        },
        {
            title: "Energy analysis of code regions of HPC applications using EnergyAnalyzer tool",
            authors: ['S Benedict', 'RS Rejitha', 'C Preethi', 'CB Bright', 'WS Judyfer'],
            details: "International Journal of Computational Science and Engineering 14 (3), 267-278, 2017."
        },
        {
            title: "A Bio-Inspired Hybrid Computation for Managing and Scheduling Virtual Resources using Cloud Concepts",
            authors: ['NC Brintha', 'S Benedict', 'JTW Jappes'],
            details: "Appl. Math journal, Vol. 11 (2), pp 565-572, 2017."
        }
    ]
    rankedPublication = [];
    angular.forEach(publication, function(item) {
        rankedPublication.push({
            publication: item,
            rank: 0.5 - Math.random()
        });
    });
    this.rankedPublication = rankedPublication;
    this.faculty = faculty;
    rankedFaculty = [];
    angular.forEach(faculty, function(item) {
        rankedFaculty.push({
            faculty: item,
            rank: 0.5 - Math.random()
        });
    });
    this.rankedFaculty = rankedFaculty;
})