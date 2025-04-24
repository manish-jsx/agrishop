import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import SEOMeta from "@/components/seo-meta"
import FAQSection from "@/components/faq-section"

interface Props {
  params: { slug: string; lang: string }
}

// This is a sample blog post - in a real application, you would fetch this data from a CMS or database
const getBlogPost = (slug: string, lang: string) => {
  // Sample blog post data
  const posts = {
    "wheat-farming-banaras": {
      title:
        lang === "en"
          ? "Best Practices for Wheat Farming in Banaras Region"
          : "बनारस क्षेत्र में गेहूं की खेती के लिए सर्वोत्तम प्रथाएं",
      date: "2023-11-15",
      image: "/placeholder.svg?height=400&width=800",
      category: lang === "en" ? "Crop Cultivation" : "फसल की खेती",
      excerpt:
        lang === "en"
          ? "Learn about the optimal techniques for wheat cultivation in the unique soil conditions of Banaras."
          : "बनारस की अनूठी मिट्टी की स्थितियों में गेहूं की खेती के लिए इष्टतम तकनीकों के बारे में जानें।",
      content:
        lang === "en"
          ? [
              "Wheat farming in the Banaras region requires special attention to the unique soil composition and climate conditions of Eastern Uttar Pradesh. The fertile alluvial soil of the Ganga basin provides excellent conditions for wheat cultivation, but farmers need to follow specific practices to maximize yield and quality.",
              "## Soil Preparation",
              "The first step in successful wheat farming is proper soil preparation. In Banaras, the ideal time to prepare the soil is mid-October after the monsoon season. The soil should be plowed to a depth of 15-20 cm and leveled properly to ensure uniform water distribution during irrigation.",
              "Adding organic matter to the soil is crucial for improving its structure and fertility. Farmers in the Banaras region have found that incorporating farm yard manure (FYM) at 10-15 tons per hectare significantly improves wheat yield.",
              "## Seed Selection",
              "Choosing the right wheat variety for the Banaras region is essential. The following varieties have shown excellent results in local conditions:",
              "- HD-2967: High-yielding variety suitable for timely sown irrigated conditions",
              "- PBW-550: Resistant to yellow rust and performs well in the Banaras climate",
              "- DBW-17: Excellent for late sowing conditions with good resistance to local diseases",
              "## Sowing Time and Method",
              "The optimal sowing time for wheat in Banaras is between November 5-25. Delayed sowing can result in yield reduction of 30-35 kg per hectare per day of delay.",
              "Line sowing using a seed drill at a row spacing of 20-22 cm is recommended. The seed rate should be 100-125 kg per hectare, with a sowing depth of 5-6 cm.",
              "## Irrigation Management",
              "Wheat requires 4-6 irrigations during its growth cycle in the Banaras region. The critical stages for irrigation are:",
              "1. Crown root initiation (21-25 days after sowing)",
              "2. Tillering stage (40-45 days after sowing)",
              "3. Jointing stage (60-65 days after sowing)",
              "4. Flowering stage (80-85 days after sowing)",
              "5. Grain filling stage (100-105 days after sowing)",
              "## Fertilizer Application",
              "Based on soil tests conducted in the Banaras region, the following fertilizer application is recommended:",
              "- Nitrogen (N): 120-150 kg/ha",
              "- Phosphorus (P): 60-80 kg/ha",
              "- Potassium (K): 40-60 kg/ha",
              "Apply 50% of nitrogen and full doses of phosphorus and potassium as basal application. The remaining nitrogen should be applied in two equal splits at the first and second irrigation.",
              "## Pest and Disease Management",
              "Common wheat pests in the Banaras region include aphids, termites, and pink stem borer. Regular monitoring and timely application of recommended pesticides are essential for control.",
              "For disease management, particularly for yellow rust and powdery mildew which are common in this region, use resistant varieties and apply fungicides like Propiconazole @ 0.1% at the first sign of disease.",
              "## Harvesting",
              "Wheat should be harvested when the grains are fully mature and have a moisture content of 12-14%. In the Banaras region, this typically occurs in late March to early April.",
              "By following these region-specific practices, farmers in Banaras can significantly improve their wheat yield and quality, contributing to better economic returns and food security in the region.",
            ]
          : [
              "बनारस क्षेत्र में गेहूं की खेती के लिए पूर्वी उत्तर प्रदेश की अनूठी मिट्टी संरचना और जलवायु परिस्थितियों पर विशेष ध्यान देने की आवश्यकता होती है। गंगा बेसिन की उपजाऊ जलोढ़ मिट्टी गेहूं की खेती के लिए उत्कृष्ट स्थिति प्रदान करती है, लेकिन किसानों को उपज और गुणवत्ता को अधिकतम करने के लिए विशिष्ट प्रथाओं का पालन करने की आवश्यकता होती है।",
              "## मिट्टी की तैयारी",
              "सफल गेहूं की खेती का पहला कदम उचित मिट्टी की तैयारी है। बनारस में, मिट्टी तैयार करने का आदर्श समय मानसून के मौसम के बाद मध्य अक्टूबर है। मिट्टी को 15-20 सेमी की गहराई तक जोता जाना चाहिए और सिंचाई के दौरान समान पानी के वितरण को सुनिश्चित करने के लिए ठीक से समतल किया जाना चाहिए।",
              "मिट्टी में जैविक पदार्थ जोड़ना इसकी संरचना और उर्वरता में सुधार के लिए महत्वपूर्ण है। बनारस क्षेत्र के किसानों ने पाया है कि प्रति हेक्टेयर 10-15 टन फार्म यार्ड खाद (FYM) को शामिल करने से गेहूं की उपज में काफी सुधार होता है।",
              "## बीज चयन",
              "बनारस क्षेत्र के लिए सही गेहूं की किस्म का चयन करना आवश्यक है। स्थानीय परिस्थितियों में निम्नलिखित किस्मों ने उत्कृष्ट परिणाम दिखाए हैं:",
              "- HD-2967: समय पर बोई गई सिंचित परिस्थितियों के लिए उपयुक्त उच्च उपज वाली किस्म",
              "- PBW-550: पीले रस्ट के प्रतिरोधी और बनारस की जलवायु में अच्छा प्रदर्शन करता है",
              "- DBW-17: स्थानीय बीमारियों के अच्छे प्रतिरोध के साथ देर से बुवाई की स्थिति के लिए उत्कृष्ट",
              "## बुवाई का समय और विधि",
              "बनारस में गेहूं की बुवाई का इष्टतम समय 5-25 नवंबर के बीच है। देरी से बुवाई से प्रति हेक्टेयर प्रति दिन देरी से 30-35 किलोग्राम की उपज में कमी हो सकती है।",
              "20-22 सेमी की पंक्ति दूरी पर सीड ड्रिल का उपयोग करके लाइन बुवाई की सिफारिश की जाती है। बीज दर 100-125 किलोग्राम प्रति हेक्टेयर होनी चाहिए, जिसकी बुवाई की गहराई 5-6 सेमी हो।",
              "## सिंचाई प्रबंधन",
              "बनारस क्षेत्र में गेहूं को अपने विकास चक्र के दौरान 4-6 सिंचाई की आवश्यकता होती है। सिंचाई के महत्वपूर्ण चरण हैं:",
              "1. क्राउन रूट इनिशिएशन (बुवाई के 21-25 दिन बाद)",
              "2. टिलरिंग स्टेज (बुवाई के 40-45 दिन बाद)",
              "3. जॉइंटिंग स्टेज (बुवाई के 60-65 दिन बाद)",
              "4. फूल आने का चरण (बुवाई के 80-85 दिन बाद)",
              "5. अनाज भरने का चरण (बुवाई के 100-105 दिन बाद)",
              "## उर्वरक अनुप्रयोग",
              "बनारस क्षेत्र में किए गए मिट्टी परीक्षणों के आधार पर, निम्नलिखित उर्वरक अनुप्रयोग की सिफारिश की जाती है:",
              "- नाइट्रोजन (N): 120-150 किग्रा/हेक्टेयर",
              "- फास्फोरस (P): 60-80 किग्रा/हेक्टेयर",
              "- पोटेशियम (K): 40-60 किग्रा/हेक्टेयर",
              "बेसल एप्लिकेशन के रूप में 50% नाइट्रोजन और फास्फोरस और पोटेशियम की पूरी खुराक लागू करें। शेष नाइट्रोजन को पहली और दूसरी सिंचाई पर दो बराबर हिस्सों में लागू किया जाना चाहिए।",
              "## कीट और रोग प्रबंधन",
              "बनारस क्षेत्र में आम गेहूं के कीटों में एफिड्स, दीमक और गुलाबी तना छेदक शामिल हैं। नियमित निगरानी और अनुशंसित कीटनाशकों का समय पर अनुप्रयोग नियंत्रण के लिए आवश्यक है।",
              "रोग प्रबंधन के लिए, विशेष रूप से पीले रस्ट और पाउडरी मिल्ड्यू के लिए जो इस क्षेत्र में आम हैं, प्रतिरोधी किस्मों का उपयोग करें और रोग के पहले संकेत पर प्रोपिकोनाज़ोल @ 0.1% लागू करें।",
              "## कटाई",
              "गेहूं की कटाई तब की जानी चाहिए जब अनाज पूरी तरह से परिपक्व हो जाएं और उनमें 12-14% नमी की मात्रा हो। बनारस क्षेत्र में, यह आमतौर पर मार्च के अंत से अप्रैल की शुरुआत में होता है।",
              "इन क्षेत्र-विशिष्ट प्रथाओं का पालन करके, बनारस के किसान अपनी गेहूं की उपज और गुणवत्ता में काफी सुधार कर सकते हैं, जिससे क्षेत्र में बेहतर आर्थिक रिटर्न और खाद्य सुरक्षा में योगदान होता है।",
            ],
      faqs: [
        {
          question:
            lang === "en"
              ? "What is the best time to sow wheat in Banaras?"
              : "बनारस में गेहूं की बुवाई का सबसे अच्छा समय क्या है?",
          answer:
            lang === "en"
              ? "The optimal sowing time for wheat in Banaras is between November 5-25."
              : "बनारस में गेहूं की बुवाई का इष्टतम समय 5-25 नवंबर के बीच है।",
        },
        {
          question:
            lang === "en"
              ? "Which wheat varieties perform best in Banaras?"
              : "बनारस में कौन सी गेहूं की किस्में सबसे अच्छा प्रदर्शन करती हैं?",
          answer:
            lang === "en"
              ? "HD-2967, PBW-550, and DBW-17 have shown excellent results in Banaras conditions."
              : "HD-2967, PBW-550, और DBW-17 ने बनारस की परिस्थितियों में उत्कृष्ट परिणाम दिखाए हैं।",
        },
        {
          question:
            lang === "en"
              ? "How many irrigations does wheat need in Banaras?"
              : "बनारस में गेहूं को कितनी सिंचाई की आवश्यकता होती है?",
          answer:
            lang === "en"
              ? "Wheat requires 4-6 irrigations during its growth cycle in the Banaras region."
              : "बनारस क्षेत्र में गेहूं को अपने विकास चक्र के दौरान 4-6 सिंचाई की आवश्यकता होती है।",
        },
      ],
    },
    // Add more blog posts as needed
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: Props) {
  const { slug, lang } = params
  const post = getBlogPost(slug, lang)

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold">{lang === "en" ? "Blog post not found" : "ब्लॉग पोस्ट नहीं मिला"}</h1>
        <Button asChild variant="ghost" className="mt-4">
          <Link href={`/${lang}/blog`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {lang === "en" ? "Back to Blog" : "ब्लॉग पर वापस जाएं"}
          </Link>
        </Button>
      </div>
    )
  }

  // SEO data
  const alternateLang = lang === "en" ? "hi" : "en"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrishop.com"
  const currentUrl = `${baseUrl}/${lang}/blog/${slug}`
  const alternateUrl = `${baseUrl}/${alternateLang}/blog/${slug}`

  return (
    <>
      <SEOMeta
        title={post.title}
        description={post.excerpt}
        keywords={post.category}
        currentUrl={currentUrl}
        alternateUrl={alternateUrl}
        lang={lang}
        alternateLang={alternateLang}
      />

      <main className="flex min-h-screen flex-col">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost">
            <Link href={`/${lang}/blog`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {lang === "en" ? "Back to Blog" : "ब्लॉग पर वापस जाएं"}
            </Link>
          </Button>
        </div>

        {/* Blog Post Content */}
        <article className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="mr-2 h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString(lang === "en" ? "en-US" : "hi-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <Tag className="ml-4 mr-2 h-4 w-4" />
              <span>{post.category}</span>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>

            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("##")) {
                const headingText = paragraph.substring(2).trim()
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                    {headingText}
                  </h2>
                )
              } else if (paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    <li className="text-gray-700">{paragraph.substring(2).trim()}</li>
                  </ul>
                )
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal pl-6 mb-4">
                    <li className="text-gray-700">{paragraph.substring(paragraph.indexOf(".") + 1).trim()}</li>
                  </ol>
                )
              }
              return (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>

        {/* FAQ Section */}
        {post.faqs && (
          <FAQSection
            title={lang === "en" ? "Frequently Asked Questions" : "अक्सर पूछे जाने वाले प्रश्न"}
            description={
              lang === "en"
                ? "Common questions about wheat farming in Banaras"
                : "बनारस में गेहूं की खेती के बारे में सामान्य प्रश्न"
            }
            faqs={post.faqs}
            className="bg-gray-50"
          />
        )}

        {/* Related Posts Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">{lang === "en" ? "Related Articles" : "संबंधित लेख"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* This would typically be populated with actual related posts */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video relative">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Related post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {lang === "en" ? "Soil Testing for Wheat Cultivation" : "गेहूं की खेती के लिए मिट्टी परीक्षण"}
                  </h3>
                  <Link
                    href={`/${lang}/blog/soil-testing-wheat`}
                    className="text-green-700 hover:text-green-800 font-medium text-sm"
                  >
                    {lang === "en" ? "Read More" : "और पढ़ें"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
