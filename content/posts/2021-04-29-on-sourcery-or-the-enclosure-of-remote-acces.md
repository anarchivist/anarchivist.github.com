---
comments: true
date: 2021-04-29T10:43:01-07:00
slug: on-sourcery-or-the-enclosure-of-remote-access
title: On Sourcery, or the enclosure(?) of remote access
tags:
- archives
- labor
- new enclosures
- technology
summary: In this post, I try to unpack some of my concerns around [Sourcery]( https://sourceryapp.org) as raised in my Society of California Archivists keynote, and how they relate to the visibility of archival labor, austerity, and enclosure.
syndication:
- https://twitter.com/anarchivist/status/1387826682090954754
- https://twitter.com/anarchivist/status/1387828357467828224
- https://chaos.social/@anarchivist/106149880911013887
---

Archivists and archival users alike have been thinking a lot about remote access to archival collections, and I was lucky to engage with colleagues on this at the [Lighting the Way: A National Forum on Archival Discovery and Delivery][1] that we convened in February 2020. A lot of this touches on past work by colleagues at UC Irvine on the notion of a [“virtual reading room”][2], which is a controlled online space to provide access to digital materials with copyright or donor restrictions. This phrase and concept resonated further with Forum presenters like [Heather Smedberg from UC San Diego][3] and [Greg Cram from NYPL][4], and these folks are refining these concepts further in a [Lighting the Way Working Meeting group][5] dedicated to the concept.

Of course the possibility of remote access raises real concerns about sustainability, ethics, and a whole host of other issues, and it’s become a lot more important as we’re still stuck in an unprecedented global health crisis, which has had its own material realities on people’s lives and livelihoods. This has impacted both the lives of archivists and academic researchers, too, with the latter lamenting how this impacts their research. While archivists tend speak to frustration about demands for access. This can have significant impact on a doctoral student’s ability to advance, or an early career or adjunct faculty member to work towards securing tenure.

It is between these two contexts that I find myself thinking about [Sourcery][6], in development at [Greenhouse Studios at the University of Connecticut][7], and a project of the [Corporation for Digital Scholarship][8], which also develops and manages Zotero and Tropy. Sourcery endeavors to make document requests “easy” by [“[giving] archival staff and patrons one easy platform for requesting and receiving scans”][9]. It reduces costs for researchers by reducing travel costs, and hopefully, the environmental impact of travel. As described by Tom Scheinfeldt in a panel at the [Spring 2021 CNI Membership Meeting][10]:

> Sourcery is a sort of very specific solution to a very specific problem that scholars face more often than archivists may realize, which is access to known archival sources right a [particular] source that you know, is in the archive. … The scholar here in question needs access to a source that he already knows sits at the National Archives in London. And the question is, how does he get it –  he's not in London, not sure where he is, but he's not in London – how does he get this source that he knows is there? ([08:15-09:09][11])

Scheinfeldt acknowledges a few questions in this panel that are underscored more implicitly by the Sourcery website: 1) how does this intersect with existing rights and policies; 2) what are the integration points with systems and metadata managed by archives and libraries; 3) how does this impact the visibility of archival labor; and 4) what does entering the gig economy mean for librarians and archivists? Questions 1 and 2 are of great interest to me given Lighting the Way and the work on virtual reading rooms, but that’s perhaps a separate post and line of discussion. What I want to do in the rest of this post is to focus on 3 and 4, given my [recent keynote at the SCA AGM][12].

The visibility of archival labor has much to do with the perception of archival labor. As I shared in the keynote, and as acknowledged by Scheinfeldt and his copanelists Dan Cohen, Barbara Rockenbach, and Greg Colati, this also needs to be understood in the context of resource and staffing availability within archives and libraries, which is further complicated by Cohen’s description (and to be fair, problematization) of a “gold standard” for archival access that’s had to shift because of the pandemic ([41:22-43:13][13]). What I think Scheinfeld, Cohen, Rockenbach, Colati, and the moderator and CNI executive director Cliff Lynch ignore is the context of the “multi-decade cycle of poverty” as described by [Eira Tansey][14] in her article [”Archives Without Archivists”][15]. Tansey contextualizes this through both looking at number of reports from the 1980s onwards, notably Levy and Robles’ [_The Image of Archivists: Resource Allocators’ Perceptions_][16]. Levy and Robles describe stereotypes of archives and archival work in way that made me go white like a ghost:

> A stereotype of archivists and their work clearly emerges in the study of resource allocators. Archivists are viewed as quiet professionals, carrying out a practically frivolous activity. … Archival work is plagued by stereotypes, too. … Although resource allocators think they know what archives are, they are wrong. (“Archivists’ Resource Allocators: The Next Step”)

Tansey also provides tangible examples of underfunded archives programs: the Target corporate archives, the State Archives of Georgia, and Lincoln University, a historically Black university that closed its special collections and archives in 2010. It is impossible for me to engage with the Sourcery and remote access panel without considering the positionality of its speakers. Cohen and Rockenbach are university librarians/library deans at Northeastern University and Yale University respectively; Scheinfeldt and Colati run programs at University of Connecticut; Lynch, as moderator, is an executive director of an organization that holds membership meetings with a limited number of slots where lots of deans, associate deans, and CIOs are in attendance. Their audience is, largely, academic library and IT administrators, although sometimes they let some of folks in the “unwashed masses” ([26:44][17]) attend if we’re presenting. The reality in particular is that that Cohen and Rockenbach are resource allocators, and Lynch is in a considerable position of influence himself on resource allocators. It’s easy to say that Sourcery obfuscates archival labor further, but it also obfuscates how we resolve issues of how archival work is perceived and resourced in times of increasing austerity. Colati argues in the panel ([55:52][18]) that our perceived notions of quality should go down, such as digitization at lower resolution, but I wonder if that just speaks to further cycles of poverty and introduce a form of technical debt to operations that still misunderstands the [total cost of stewardship][19] as defined by Chela Scott Weber, Martha O’Hara Conway, Nicholas Martin, Gioia Stevens, and Brigette Kamsler.

As for the gig economy, I recognize that Scheinfeldt and the Greenhouse Studios team are thinking about this carefully, as he’s generously [engaged with me on Twitter about this][20]. While he [acknowledges that Sourcery is or will be open source][21], so far only the [frontend web app][22] and its [associated components][23] are - that’s less substantial to the rest of my concerns and critique. At it’s worst, and as I described in the SCA AGM keynote, my fear is that Sourcery potentially introduces a “quadruple threat of enclosure”:

* In an ungenerous view, linked with Colati’s suggestion above, it introduces the notion that archival digitization can be viewed as piecework to serve researchers with specific demands. This has two possible impacts. First, it incentivizes avoiding at looking at archives holistically and systematically. While I recognize that many archives need to continue patron-driven digitization, it’s still understood and contextualized amongst other selection criteria that many institutions have overhauled to address concerns of diversity, equity and inclusion. Secondly, it suggests that digitization and the “last mile problem” archival delivery can be compensated as piecework, which is among my biggest fears.
* Sourcery uses an [“algorithm tuned to local conditions”][24] to determine how much a researcher pays for a request. While Scheinfeldt indicates that Sourcery is open source, I haven’t been able to find that algorithm in the code yet (there is likely a distinct backend codebase not yet open), but it is described as using “the scope of the request, the number of local Sourcerers [i.e., Sourcery workers] available at the time, the urgency, and other variables.” Locality suggests that the application needs some type of position information from Sourcerers. While Sourcerers are arguably opting in to work and participate, they are also opting to a form of surveillance that tracks their location. Whether this happens in realtime, or is disclosed to Sourcery in other ways, is yet unclear.
* Sourcery, in Lynch’s words, allows “credentialed people who essentially can monetize their credentials” ([25:09-26:00][25]) by participating in the platform. While Scheinfeldt, Rockenbach, and Cohen engage with this on questions of openness and have lofty goals of democratizing access, this does play to equity concerns faced by the archival profession about access itself, such as the [problematic access policies of the Huntington Library][26] juxtaposed with the fact that they hold the papers of Octavia Butler. I referenced Cecelia Caballero’s [“Mothering While Brown in White Spaces”][27] in my talk, albeit just through a footnote; Lindy Smith engages with this piece further in her [blog post about access and inclusion in the reading room][28] from 2018.
* What becomes of the access copies? As Colati suggests, perhaps archives are well served by relying more on lower resolution imaging to fulfill these needs. As the Folger Shakespeare Library has demonstrated, [reference images have enough value to warrant retention and reuse][29], and the Folger is allowing such reference images taken with smartphones to accrete value through making them available. Colati and Cohen suggest in the panel that “you could run [reference images] through some some machine learning or computer vision techniques” to add metadata. However, once that metadata is added, through any process, there’s the possibility that they’ll be leveraged to create ML training data. While this could improve metadata creation and the like, the training data sets, or algorithms refined thereupon, themselves could be subject to enclosure, as I suggested in the talk, and as [expanded on further by Sam Popowich][30].

All of these remarks lead me to not to say simply that Sourcery any of these folks are “bad”; I know and respect them, and some are former coworkers. But nonetheless, I ask them, and us, to remember that what they say can, and does, influence their peers, and those of us charged with putting work into place. Sourcery, as envisioned could be viewed as akin to a supply-chain management system’s interface as [described by Miriam Posner][31], and as such, it could have significant effects and affects on Sourcerers as “mouseworkers.” I would hope for further engagement with the Sourcery team, as well as the panelists, and I look forward to engagement and continuing conversation.

[1]:	https://library.stanford.edu/projects/lightingtheway/forum-february-2020
[2]:	https://saaers.wordpress.com/2016/02/11/born-digital-and-in-the-virtual-reading-room/
[3]:	https://purl.stanford.edu/rz180xn4072
[4]:	https://purl.stanford.edu/yv187wv5370
[5]:	https://library.stanford.edu/blogs/stanford-libraries-blog/2021/04/launching-lighting-way-working-meeting
[6]:	https://sourceryapp.org/
[7]:	https://greenhousestudios.uconn.edu/
[8]:	https://digitalscholar.org/
[9]:	https://web.archive.org/web/20210429153243if_/https://sourceryapp.org/
[10]:	https://vimeo.com/533208891
[11]:	https://vimeo.com/533208891#t=8m15s
[12]:	https://matienzo.org/2021/119/apz/
[13]:	https://vimeo.com/533208891#t=41m22s
[14]:	https://eiratansey.com/
[15]:	https://doi.org/10.7945/C2GW2F
[16]:	https://catalog.hathitrust.org/Record/004031185
[17]:	https://vimeo.com/533208891#t=26m44s
[18]:	https://vimeo.com/533208891#t=55m52s
[19]:	https://doi.org/10.25333/zbh0-a044
[20]:	https://twitter.com/foundhistory/status/1387792113023209484
[21]:	https://twitter.com/foundhistory/status/13877874087966965
[22]:	https://github.com/GreenhouseStudios/sourcery-web-app
[23]:	https://github.com/GreenhouseStudios/sourcery-components
[24]:	http://web.archive.org/web/20210429164937/https://sourceryapp.org/about
[25]:	https://vimeo.com/533208891#t=25m09s
[26]:	http://web.archive.org/web/20200423050559/https://www.huntington.org/become-reader
[27]:	https://www.chicanamotherwork.com/single-post/2017/08/23/mothering-while-brown-in-white-spaces-or-when-i-took-my-son-to-octavia-butler-s-exhibit
[28]:	https://issuesandadvocacy.wordpress.com/2018/05/04/archivists-on-the-issues-access-and-inclusion-in-the-reading-room/
[29]:	https://collation.folger.edu/2020/10/reference-image-collection/
[30]:	https://doi.org/10.7939/r3-bh46-qb62
[31]:	https://www.newyorker.com/science/elements/the-software-that-shapes-workers-lives
