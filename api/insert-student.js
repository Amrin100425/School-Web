const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("school_db");
    const col = db.collection("students");

    // Grade 2
    await col.insertOne({
      lastName: "កែវ",
      firstName: "ពេជ្រ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "កែវ",
      firstName: "សុភារី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "ដានីយ៉ែល",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ង៉ុយ",
      firstName: "លីហេង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជន",
      firstName: "រតនៈ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឈឿ",
      firstName: "រក្សា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឌឿន",
      firstName: "កញ្ញា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ណាក់",
      firstName: "យូសៀង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ណាល់",
      firstName: "វល័ក្ខ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "តារា",
      firstName: "កញ្ចនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ធាំ",
      firstName: "គីមទ្រី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "និត",
      firstName: "សិរីវឌ្ឍនៈ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "នឿន",
      firstName: "ស៊ាវមាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ប៊ុនណារិទ្ធ",
      firstName: "វិសាល",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ផុន",
      firstName: "សេដ្ឋារត្ន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ផុន",
      firstName: "សេដ្ឋារឹទ្ធិ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ពិសិដ្ឋ",
      firstName: "បូរី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ពិសិដ្ឋ",
      firstName: "សៀវមាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ពេជ្រ",
      firstName: "ឃាន់បញ្ញាសុខគង់",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "ណារុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ាញ",
      firstName: "ពុធថា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ី",
      firstName: "ចាន់ដា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉េង",
      firstName: "រតនា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "មាស",
      firstName: "អមរកញ្ញា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "មៃ",
      firstName: "សៀវអ៊ី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រម្យ",
      firstName: "រ័ត្នណាវី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ៉ឹម",
      firstName: "សុវណ្ណារិទ្ធ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ័ត្ន",
      firstName: "ចន្ថា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លត",
      firstName: "សុម៉ាវត្តី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "រតនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លឹម",
      firstName: "ប៉េងសិទ្ធ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វណ្ណា",
      firstName: "រដ្ឋា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វ៉េង",
      firstName: "រិទ្ធី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សរ",
      firstName: "សាន់ឆាយ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស៊ីន",
      firstName: "សុខវណ្ណឌីកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សារ៉ាត់",
      firstName: "មីនត្រា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សាល",
      firstName: "សុវណ្ណរ៉ាមេន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "ម៉េងសៀកលី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុភេន",
      firstName: "ចន្ទស្រីមាស",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "សុបញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សោម",
      firstName: "ស៊ូតា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស្រឿង",
      firstName: "ឆនុត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "មានហូ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឡេង",
      firstName: "សុលាភ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "អឿន",
      firstName: "សំរឹទ្ធិ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉េង",
      firstName: "លីវស៊ីហុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ប៉ាវ",
      firstName: "ម៉េងយ្វុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ខន",
      firstName: "សុខណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "សុជាតិ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "សុភិនុត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គុជ",
      firstName: "យូអីញ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឆាត",
      firstName: "ដារិទ្ធ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឆៃ",
      firstName: "ម៉េងឡុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជន",
      firstName: "វីរៈបុត្រ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ផានិត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជិន",
      firstName: "ស្រីនាង",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ថាន់",
      firstName: "ស្រីមាស",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ប៉ាវ",
      firstName: "សិរីវីយ៉ា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ប៊ុន",
      firstName: "ឡាយមាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉នឆាលី",
      firstName: "ម៉ា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ែន",
      firstName: "សុខផៃ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ៃ",
      firstName: "សៀវម៉េង",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ៅ",
      firstName: "យីមលីនីសុខណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "មាន",
      firstName: "សុខម៉េង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "យឹម",
      firstName: "កល្យាណ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រតនា",
      firstName: "មាសិកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ៉ាវី",
      firstName: "សុជាតា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "គីមមាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លឿន",
      firstName: "រចនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វណ្ណី",
      firstName: "សុខម៉ូលីកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វាសនា",
      firstName: "ឧត្តម",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សន",
      firstName: "គីមស៊ុន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សាន់",
      firstName: "សុជាតា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សី",
      firstName: "សុធារិទ្ធ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "យូឃែ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សេម",
      firstName: "សុខបញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស្មា",
      firstName: "ឯលស្រីខ្លឹង",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សំណាងបញ្ញា",
      firstName: "សំអូន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "ចន្ទ្រា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "មន្នីពណ្ណរាយ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "សិទ្ធត្រា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហែ",
      firstName: "កញ្ញា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "អាត",
      firstName: "សាណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "រ៉ាណេ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "វជ្ជៈនេត្រា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វី",
      firstName: "ហ្វីលីប",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "កង",
      firstName: "ចាន់កន្និកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ខេន",
      firstName: "សុវណ្ណារិទ្ធ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គឹម",
      firstName: "ឆវ័ន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឃី",
      firstName: "ចលនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឃ្លាំង",
      firstName: "ដាឡែត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឆៃយុត",
      firstName: "ចំរើន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ច័ន្ទឌី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ជួន",
      firstName: "ធីរីកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឈន់",
      firstName: "សៀវឡុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឈឿម",
      firstName: "សុខ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ថន",
      firstName: "ណាណាហ្វី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ទិត្យ",
      firstName: "សុផាត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ធុង",
      firstName: "សុវណ្ណបញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "នីនាន",
      firstName: "ចន្ទរស្មី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "នូ",
      firstName: "រតនៈ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "បញ្ញា",
      firstName: "នូណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ផេង",
      firstName: "បញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ពៅ",
      firstName: "ណាន់ផៃ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "ផារ៉ាឌីន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉ៅ",
      firstName: "សុខពិមាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "យ៉ាំង",
      firstName: "គីមស៊ូ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "យឿន",
      firstName: "វីហ្សា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រក្សា",
      firstName: "យារិ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "លីណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "សុធារិទ្ធិ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រ៉ូត",
      firstName: "សុភ័ក្រ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រិទ្ធ",
      firstName: "វិសាល",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "រី",
      firstName: "ឧត្តមបញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ស៊ាងឡុង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វង្ស",
      firstName: "វីរៈបុត្រ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វ៉ាន់",
      firstName: "រីឆាត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វាសនា",
      firstName: "ទេពី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សិដ្ធ",
      firstName: "ពីសី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុង",
      firstName: "សុភ័ក្រ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុន",
      firstName: "សុខា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុផល",
      firstName: "សុវណ្ណបញ្ញា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុវ៉ាត",
      firstName: "បញ្ញាវីន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សោនភារម្យ",
      firstName: "ឌីដេវីត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សៅ",
      firstName: "រក្សា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហានសារិក",
      firstName: "គឹមស៊្រុន",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហូន",
      firstName: "ឆាលី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហូន",
      firstName: "ធីតា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឡូត",
      firstName: "គីមឡាយ",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ខុម",
      firstName: "មុន្នីរតនា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "គិន",
      firstName: "វណ្ណី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឆេង",
      firstName: "សូម៉ិ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឈាង",
      firstName: "សុវណ្ណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ដារ៉ា",
      firstName: "សំណាង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឌី",
      firstName: "លីតា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ឌី",
      firstName: "អារីហ្វីន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ថៃ",
      firstName: "សិរីសាធូការ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ទុញ",
      firstName: "លក្ខណា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ទ្ធី",
      firstName: "កាកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ធុច",
      firstName: "គឹមស៊ុន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ធួន",
      firstName: "សុខដារ៉ូ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "និត",
      firstName: "ដាណៃ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "នីលី",
      firstName: "លីកា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "បារាំង",
      firstName: "សុជាតា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ពឡឹក",
      firstName: "ស្រីនិច",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "រីហ្សា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "សុអេង",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ម៉េង",
      firstName: "សុខមិនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "លឹម",
      firstName: "លីហាក់",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វណ្ណៈ",
      firstName: "នេត",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វ៉ា",
      firstName: "មេត្តា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "វុធ",
      firstName: "ហាក់នរិន្ទ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស៊ិម",
      firstName: "ដារាជ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស៊ី",
      firstName: "កែវអេលីយ៉ា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ស៊ុន",
      firstName: "សុខនីម៉ា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សី",
      firstName: "វីហ្សា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "ច័ន្ទមិនា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុង",
      firstName: "ពិសិដ្ឋថារាជ្យ",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុង",
      firstName: "សាយណ្ណារ៉ា",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សៀក",
      firstName: "ស៊ីតាន",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សេន",
      firstName: "ផល្លីន",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សៅ",
      firstName: "ថាវី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សំបូរ",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហ៊ីម",
      firstName: "សុវណ្ណវត្តី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហួរ",
      firstName: "កក្កដា",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "អុន",
      firstName: "ជីងជីង",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សេីរ",
      firstName: "សុធី",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "សុភ័ន្ត",
      firstName: "សុម៉ាវត្តី",
      gender: "ស",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "ប៊ុនហាក់",
      gender: "ប",
      grade: 2,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "យុងអេង",
      gender: "ប",
      grade: 2,
    });

    // Grade 3
    await col.insertOne({
      lastName: "ខន",
      firstName: "រុនរ៉ូស្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "សុទន្តចិន្តា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឃឿន",
      firstName: "សុខគីម",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ងីម",
      firstName: "លីហ្វុងជីង",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ងីម",
      firstName: "លីហ្វុងហ្វ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចេង",
      firstName: "វិបុល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ថន",
      firstName: "ស៊ីរ៉ានុន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ថាត",
      firstName: "ចាន់សុវណ្ណ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប៊ុនធឿន",
      firstName: "លីហ្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ផៃ",
      firstName: "យូនិច",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ពឹង",
      firstName: "សុវិបុល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ព្រឹទ្ធគី",
      firstName: "សុមេធទីសច្ចនា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "សុវណ្ណបញ្ញា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រម្យ",
      firstName: "ព្រហ្មវិរដ្ឋ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រម្យ",
      firstName: "រតន:ពិសិដ្ឋ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉ន",
      firstName: "សុខរ៉ូហ្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉េត",
      firstName: "រតនៈ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រិន",
      firstName: "ចាន់រាជ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ័ត្ន",
      firstName: "យុទ្ធសាស្រ្ត",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លាត",
      firstName: "សិរីវឌ្ឍនី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "តាំងអេងឆាយ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សាយ",
      firstName: "សុខជា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សាំង",
      firstName: "ម៉ីហ្វាង",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "កក្កដា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "រតនា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សឿន",
      firstName: "សុផាន់ណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "ស៊ីវឡុង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "សៀវឡុង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហៀវ",
      firstName: "មូលីតា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឧត្តម",
      firstName: "ឆានុន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អាន",
      firstName: "សួរហុកហេង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អឿន",
      firstName: "ធីណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "ចាន់ដាណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ខ្មៅ",
      firstName: "តាម៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "គុជ",
      firstName: "ហ៊ស៊ិង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចាន់",
      firstName: "សីហា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចាន់់",
      firstName: "ឧត្តមបុត្រា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចិន្តា",
      firstName: "ចេស្តា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ជាតិ",
      firstName: "សុថា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដូយ",
      firstName: "ដារ៉ា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ណាត",
      firstName: "វីរីយ៉ា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ទីន",
      firstName: "រ៉ូស៊ីគីន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នឿន",
      firstName: "សុវណ្ណ:ដេត",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប្រាក់",
      firstName: "វិចិ្ចកា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ផាន់",
      firstName: "ចន្ទមន្នីរ័ត្ន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ពឺង",
      firstName: "បញ្ញាឬទ្ធិ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ពេជ្រ",
      firstName: "សេងលី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ភា",
      firstName: "ដារីកា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ម៉ាញ",
      firstName: "រីម៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "យ៉ុង",
      firstName: "ដានីអែល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រដ្ឌា",
      firstName: "ដារ៉ាបុត្រ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រឺទ្ធ",
      firstName: "សៀវអ៊ី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "លាភហេង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លីម",
      firstName: "លីហុង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វិចិត្រ",
      firstName: "រស្មី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សិទ្ធ",
      firstName: "វុត្តា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សិទ្ធ",
      firstName: "សីម៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សីហា",
      firstName: "វណ្ណារ៉ា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុ",
      firstName: "សូភី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "ចំរើន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុធា",
      firstName: "គីមសេង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុធី",
      firstName: "រ៉ារិទ្ធ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "នីហ្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែម",
      firstName: "បញ្ញាសិដ្ធ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែម",
      firstName: "ពុទ្ធិរាជ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែម",
      firstName: "ពុទ្ធិរិទ្ធ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សំ",
      firstName: "សេងហុក",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ុន",
      firstName: "សុខនីតា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហួត",
      firstName: "វឌ្ឃន:ឧត្តម",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហ៊ួ",
      firstName: "លីហាវ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អ៊ឺង",
      firstName: "ធារីកា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អ៊ាប",
      firstName: "យូស៊ាន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "អ៊ូ",
      firstName: "សៅសេរីបុត្រ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "គីម",
      firstName: "តិម៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "កុសល",
      firstName: "រក្សា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "កែវ",
      firstName: "ពេជ្របញ្ញា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "គើយ",
      firstName: "ណារី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឃុត",
      firstName: "ម៉េងលាង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឈង់",
      firstName: "អរុណរ៉េមហ្វា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឈឿន",
      firstName: "សុជាតិតា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ណាប់",
      firstName: "សៀងណាំ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "ដេវីត",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នន់",
      firstName: "ឆពេជ្រ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នន់",
      firstName: "ហេងលី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នា",
      firstName: "យូណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ផល្លា",
      firstName: "សុខណារត្ន័",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ពៅ",
      firstName: "វិរ័ត្ន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ភ័ក",
      firstName: "រចនា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "មឿន",
      firstName: "ធានស៊ឺ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "មឿន",
      firstName: "សុនីសា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រតនា",
      firstName: "ណាលីស",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រតនា",
      firstName: "សិលា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "ថៃនីត",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉ាត់",
      firstName: "ចន្ទ័ភារុណ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉ាន",
      firstName: "សុផាន់ម៉ី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វាសនា",
      firstName: "សេរីវិជ្ជរ៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វុន",
      firstName: "ម៉ានី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សយ",
      firstName: "សេងលីដាវី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ាង",
      firstName: "ចាន់ចរិយា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សារ៉ាត់",
      firstName: "សោម៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សឿន",
      firstName: "ផែនស៊ី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សៀត",
      firstName: "ស្រីពៅ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សៀម",
      firstName: "វិមាន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សៀម",
      firstName: "វិសាល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែន",
      firstName: "សុវណ្ណស្រីពេជ្រ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សំណាក់",
      firstName: "ឈូរឈូរ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សំអាត",
      firstName: "សារ៉ាន់យ៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "រីយ៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "សុវណ្ណមុន្នី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "យឹម",
      firstName: "គ័ង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឌីម",
      firstName: "ពេជ្រចន្ទសុវណ្ណឌី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ណាង",
      firstName: "ផាន់ណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ខុន",
      firstName: "សុភត្រ្តា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចាន់",
      firstName: "សុម៉ាលីស",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឆៃ",
      firstName: "វណ្ណវីរៈបុត្រ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ជន់",
      firstName: "សុណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ជ្រា",
      firstName: "ស្រេងម៉េងកឺ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ជ័យ",
      firstName: "អ៊ីសាវ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឈន",
      firstName: "លីហេងលាភ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដឿម",
      firstName: "ចាន់ឌីន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដេត",
      firstName: "រចនា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដេត",
      firstName: "រ៉ាជនី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "តោ",
      firstName: "បុប្ផាចំរើនពៅ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ទេព",
      firstName: "ស្រីមាន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ធា",
      firstName: "ហុកឆេង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ធួន",
      firstName: "សីហះ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នៅ",
      firstName: "សុផានិត",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប្រាក់",
      firstName: "សំបូរ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "ម៉ារ៉ាឌី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ពេជ្រ",
      firstName: "ផាណៃ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "យ៉ាត",
      firstName: "តាវ៉ាន់",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រដ្ឋា",
      firstName: "ដារាថេត",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ប៊ុនណារ៉េន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ស្រីពេជ្រ",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វ៉ែន",
      firstName: "វិរះ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វី",
      firstName: "ស្វីតា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សន",
      firstName: "គឹមសាន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សម្បត្តិ",
      firstName: "នីតា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ី",
      firstName: "វិបុល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ុន",
      firstName: "ស៊ូអ៊ី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សឿន",
      firstName: "អេលីហ្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែន",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សែម",
      firstName: "សាម",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សំ",
      firstName: "សុចន្ទ័ត្រា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហ៊ាត",
      firstName: "ភក្ដី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "ពៅរក្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឡន",
      firstName: "ម៉េងទ្រី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឯម",
      firstName: "សុខុមស្រីនិច",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វឿន",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ខេង",
      firstName: "រ៉ូសាណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ងួន",
      firstName: "មិនា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ចិត្ត",
      firstName: "វ៉ាធីប",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឆន",
      firstName: "ចាន់ធូ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ជុំ",
      firstName: "ឬទ្ធិស័ក្តិ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឈិន",
      firstName: "ស្រីពីន",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដា",
      firstName: "សុខរក្សា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ដារ៉ា",
      firstName: "រ៉ាត់សាភុន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "តាន់",
      firstName: "សុខវ៉ាន់នារី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ថន",
      firstName: "សួនផាន់នី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប៉ុន",
      firstName: "សម្ភ័ស",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប៊ុន",
      firstName: "មង្គល",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ប៊ុន",
      firstName: "សិរី",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ម៉ាត",
      firstName: "បញ្ញា",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ម៉ៅ",
      firstName: "ហាវិឡា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "មិន",
      firstName: "វុធវិទូ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រដ្ឋ",
      firstName: "ពិសិដ្ឋ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ៉ី",
      firstName: "សម្បត្តិ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "រ័ត្ន",
      firstName: "សៀវមាន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ដារ៉ា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លឹម",
      firstName: "ប៉េងហៃ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "លឿត",
      firstName: "ធនី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វង្ស",
      firstName: "សុខជីង",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "វ៉ាន់",
      firstName: "ចន្ធា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សយ",
      firstName: "សុខម៉ាលីកា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ិន",
      firstName: "លីមាន",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សីហ៍",
      firstName: "សិទ្ទិកុម៉ារីកា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "សំបូរ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "សូរ",
      firstName: "ម៉ារីណា",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហ៊ត់",
      firstName: "ឋានៈ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "មុន្នីរាជ",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ឡេង",
      firstName: "គឹមហុង",
      gender: "ស",
      grade: 3,
    });
    await col.insertOne({
      lastName: "ស៊ឹប",
      firstName: "សេងរ៉ាឌី",
      gender: "ប",
      grade: 3,
    });
    await col.insertOne({
      lastName: "នាថទ្រី",
      firstName: "វិលៀម",
      gender: "ប",
      grade: 3,
    });

    // Grade 4
    await col.insertOne({
      lastName: "កែន",
      firstName: "សម្ភស្ស",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឃិន",
      firstName: "សាណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឃុន",
      firstName: "អេលីហ្វីណាន់",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ងាន់",
      firstName: "ខេងមួយលី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ចាប",
      firstName: "រស្មី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឆាយទួនាញ",
      firstName: "ជា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ស្រីពេជ្រ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ដម",
      firstName: "ម៉ារីយ៉ា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ណាល់",
      firstName: "ប៊ីឡាណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "នី",
      firstName: "ឃីតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ពន្លក",
      firstName: "លីរចនា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ពៅ",
      firstName: "គឹមហ្វុង",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "យ៉េន",
      firstName: "ហ័ងជីង",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រស់",
      firstName: "សិរីករុណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "សុលីតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រ័ត្ន",
      firstName: "ដារីយ៉ា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វិន",
      firstName: "សូលីដា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស៊ន",
      firstName: "សុគន្ធអប្សរ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស៊ុយ",
      firstName: "ស៊ូលីង",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សាន",
      firstName: "ស្រីសយ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សារ៉ាន់",
      firstName: "រ៉ូហ្សា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សុខេង",
      firstName: "ខាន់ដាលីកា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហង្សរដ្ឋណានេ",
      firstName: "សាពេជ្រ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហាន",
      firstName: "សារិកវ៉ាន់ហ្ស៊ី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឡា",
      firstName: "លីណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ម៉េង",
      firstName: "ស៊េវ៉ាហ្វីន",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "គីម",
      firstName: "សីហាក់",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ជី",
      firstName: "បញ្ញារក្សា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឌិត",
      firstName: "សុគន្ធលីហួរ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ត្រាយ",
      firstName: "គួយអេង",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ថា",
      firstName: "វាសនា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "នី",
      firstName: "លីហួយ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "បុល",
      firstName: "វីរ:បុត្រ",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ផាត",
      firstName: "សុខនបុត្រា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "លន់",
      firstName: "វិបុត្រ",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ស្រីមុំ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វាសនា",
      firstName: "សិរីវិជ្ជណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វុទ្ធី",
      firstName: "មករា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "ពុធវិច្ឆិកា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សោម",
      firstName: "ស្រីហ៊ាង",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស្រី",
      firstName: "ពទ្ទាគុជនាវត្តី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស្រឿន",
      firstName: "សុវណ្ណច័ន្ទមុន្នី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "បូណា",
      firstName: "ចាន់បូតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ខន",
      firstName: "វិឆារ៉ា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ដន",
      firstName: "វិច្ឆិកា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ដារ៉ា",
      firstName: "សីសុម៉ាណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ណូ",
      firstName: "កែវសុខលាភ",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "តារា",
      firstName: "មានរស្មី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ធឹង",
      firstName: "សុផាលីហ្សា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ភា",
      firstName: "អាលីហ្សា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ម៉ី",
      firstName: "កក្កដា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រតនា",
      firstName: "នីតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រម្យ",
      firstName: "រ័ត្នណារី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រស់",
      firstName: "មុនី្នរក្សា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រិន",
      firstName: "ស្រីពេជ្រ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វ៉ាន់",
      firstName: "រចនា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សយ",
      firstName: "សូភ័ណ្ឋនី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "សាវីណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សៀង",
      firstName: "ស៊ាវហ្គិច",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សំណាង",
      firstName: "ចំណាន",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហូ",
      firstName: "ស្រីឡាន",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឡម",
      firstName: "គង្គា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "អ៊ឹម",
      firstName: "និមល",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "អៀងលី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឃឿន",
      firstName: "ស៊ីណេត",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឆន",
      firstName: "សិឡា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឆាត",
      firstName: "សុវណ្ណម៉ូលីណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ជ័យ",
      firstName: "ដេបូរ៉ា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ជ័យ",
      firstName: "សុខលាភហេង",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "នួន",
      firstName: "លីណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "មួន",
      firstName: "រក្សា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រត្ន័",
      firstName: "សិរីសុខមាន",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "រ៉ាន់",
      firstName: "ឆេងគីម",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "លុច",
      firstName: "លីអឺ",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វន",
      firstName: "សុជាតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស៊ាង",
      firstName: "សៀវឈី",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ស៊្រុន",
      firstName: "សុគន្ធិ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សី",
      firstName: "សុធារ៉ា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហ៊ួន",
      firstName: "គួនអ៊ី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឡុង",
      firstName: "ចន្ទម៉ារីម៉ា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ខន",
      firstName: "ចរិយា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ឆេង",
      firstName: "ស្រីលិញ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ធួក",
      firstName: "ចាន់ធឿន",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ភាព",
      firstName: "យូអ៊ី",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "មឿន",
      firstName: "ស្រីមាន",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "យន់",
      firstName: "ស្រីនាង",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "យ៉ាំង",
      firstName: "ហូនិន",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "វ៉ា",
      firstName: "នីតា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សម្បូរ",
      firstName: "កញ្ញា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សុខុម",
      firstName: "ដារ៉ា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សុន",
      firstName: "សុភ្រ្តា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សឿត",
      firstName: "ហាក់ស្រៀង",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "សឿម",
      firstName: "គឹមឡាយ",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហ៊ីង",
      firstName: "អេលីហ្សា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "សូរិយា",
      gender: "ប",
      grade: 4,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "រ៉ាណា",
      gender: "ស",
      grade: 4,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "សុបញ្ញា",
      gender: "ប",
      grade: 4,
    });

    // Grade 5
    await col.insertOne({
      lastName: "កន",
      firstName: "ច័ន្ទពុទ្ធារី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "កុល",
      firstName: "ស្រីពេជ្រ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ចិន្តា",
      firstName: "នីម៉េងលី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ដាវណ្ឌ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ធីតារស្មី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជូរ",
      firstName: "វាសនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជួង",
      firstName: "ធឿនសុធាវណ្ឌ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជួន",
      firstName: "សុនារតី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ដា",
      firstName: "លីដែត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឋានៈ",
      firstName: "លីនូណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឌី",
      firstName: "ជេលី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ណយ",
      firstName: "កញ្ញា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ណាត់",
      firstName: "សំនៀង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "និត",
      firstName: "ឧមា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "នឿន",
      firstName: "សុភា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផល",
      firstName: "វិសាល",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផេង",
      firstName: "ស៊ីវជីង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ពៅ",
      firstName: "ចន្ទដាលីស",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ពៅ",
      firstName: "វីដា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ព្រឹទ្ធគី",
      firstName: "សុមេធទីហាណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ាប់",
      firstName: "សុខនីតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ុយ",
      firstName: "លីហួត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យន់",
      firstName: "ស៊ាវអ៊ីង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យី",
      firstName: "គីមស៊ាង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រម្យ",
      firstName: "ប្រេនឌី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រស់",
      firstName: "រក្សា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រ៉ាត់",
      firstName: "ធីតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រ៉េត",
      firstName: "អង្គារ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រិទ្ធ",
      firstName: "លីឡា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លឺម",
      firstName: "សេងហុក",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សន",
      firstName: "អភិនន្ទបទ្ទម",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សម្បត្តិ",
      firstName: "ដារ៉ុង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស៊ាង",
      firstName: "សុផាន់នី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស៊ុន",
      firstName: "រ៉េមហ្វា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សាថាត",
      firstName: "សុវណ្ណវិសា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "រស្មី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុត",
      firstName: "ស្រីមុន្នី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុផា",
      firstName: "សេងហាក់",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុភេន",
      firstName: "ពរហ្សា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សួយ",
      firstName: "សៀវឡេង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "ម៉េងឡុង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សំអាត",
      firstName: "ថាណឹប",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហង្ស",
      firstName: "រតនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហាំង",
      firstName: "ស៊ាងលី",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "ម៉ូលីកា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡា",
      firstName: "បញ្ញា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡាយ",
      firstName: "ច័ន្ទម៉ាលី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឯក",
      firstName: "សូនី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អាត",
      firstName: "បញ្ញាសិទ្ធ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អាន់",
      firstName: "សុនីតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អួន",
      firstName: "សុភានីតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "កាយ",
      firstName: "លីហ៊ាង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឃុន",
      firstName: "សុណាលីន",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ចាន់",
      firstName: "គីមឆាយ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ក់",
      firstName: "ប៊ុនឈុន",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ចេក",
      firstName: "ពិសី",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឆេង",
      firstName: "លីហួរ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជុង",
      firstName: "អេងយូហ្កិច",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឈុន",
      firstName: "វ៉ាន់ដារ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឈួ",
      firstName: "វេងឡុង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ណែម",
      firstName: "មុន្នីលក្ខ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "តោ",
      firstName: "ពេជ្រ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "តោ",
      firstName: "មេសា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ធួន",
      firstName: "សុធារី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "នៅ",
      firstName: "ចន្នី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ប៉ាវ",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "បុរិន",
      firstName: "សុជាមេត្តា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផាន់",
      firstName: "ចន្ទសុវណ្ណ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ពឹង",
      firstName: "សៀងហៃ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ព្រាប",
      firstName: "លីហ្សា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ភឹម",
      firstName: "តាក់វ៉ាន់",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ភ័ក្រ",
      firstName: "ណាំវ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ឹក",
      firstName: "សុគន្ធ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ៅ",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "មួន",
      firstName: "សូរ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យ៉ង់",
      firstName: "ស៊ីរ៉ាយូ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រតន",
      firstName: "ឆាងវី",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រឿន",
      firstName: "សុធាវី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លន់",
      firstName: "មុលលីការ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លន់",
      firstName: "វល័ក្ខ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លីម",
      firstName: "ស្រីនាង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លឿន",
      firstName: "ចាន់ណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "វណ្ណី",
      firstName: "សុខវឌ្ឍនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សាយ",
      firstName: "មិនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សីឡា",
      firstName: "សួស្ដី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុខរ៉ា",
      firstName: "ស៊ិនលី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុផល",
      firstName: "តាំងលីម",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សឿត",
      firstName: "សាវឌី",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សៀក",
      firstName: "សុបញ្ញា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សំអូន",
      firstName: "ចាន់តុលា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហន",
      firstName: "អីវ៉ាទីណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហ៊ត់",
      firstName: "វេហា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហ៊ាន",
      firstName: "គីមហុង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "យូអ៊ី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "វាសនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហៃ",
      firstName: "ចាន់ធី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡាយ",
      firstName: "លៀម",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "សីហា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "មុន្នី",
      firstName: "រ័ក្សរ៉ូម៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "កេង",
      firstName: "វណ្ណស័គ្គ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ខារ៉ូណេ",
      firstName: "ដាណៃ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គន់",
      firstName: "រ័ត្នន:",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គីម",
      firstName: "សុខគង់",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គីម",
      firstName: "សួគ៌ហ្គិចល័ង្គ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឃុត",
      firstName: "សំណាងរាជនរិន្ទ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឆៃ",
      firstName: "ហារិទ្ធ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជាស",
      firstName: "ចន្ទូ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជាស",
      firstName: "ចាន់ធា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជួង",
      firstName: "សុធារី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឈួរ",
      firstName: "ពុទ្ធារដ្ឋ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ដា",
      firstName: "រ៉េប៊ីកា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ណាក់",
      firstName: "សុវណ្ណតារាវត្តី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ណៃ",
      firstName: "សុខលីណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "តុំ",
      firstName: "ដាវីត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ធា",
      firstName: "ហុកហៀង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "ច័ន្ទមេសា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "នូន់",
      firstName: "ហេងស៊ូ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "នួន",
      firstName: "ចរិយា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ប៉ុន",
      firstName: "ច័ន្ទមុន្នីរតន៍",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "បូរិន",
      firstName: "ណារិទ្ធី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "បឿន",
      firstName: "វីរ:",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផាន",
      firstName: "សុធាឬទ្ធិ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ភណ័",
      firstName: "វិនហ្សាហ្វីត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "មករា",
      firstName: "វិទូ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ៃ",
      firstName: "សុភត្រា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ោ",
      firstName: "ណាវត្តី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ម៉ៅ",
      firstName: "កណិការ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "មាន",
      firstName: "កល្យាណ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យង់",
      firstName: "សិរីវឌ្ឍនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រតនា",
      firstName: "ដេវីដ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "លីនដា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រ៉ា",
      firstName: "សុភារ៉ានុត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រិទ្ធ",
      firstName: "សុភក្រ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លន",
      firstName: "ថានិត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លាង",
      firstName: "ម៉ូនីវណ្ណ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "តុលា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លឺ",
      firstName: "ឆេងគង់",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "វី",
      firstName: "វិជ្ជរ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស៊ីដេត",
      firstName: "លីហួរ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស៊្រុន",
      firstName: "ស៊ាងហេង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សាក់",
      firstName: "រក្សា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុខ",
      firstName: "លីមបូរ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សើ",
      firstName: "សុបញ្ញាពិសិទ្ធ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សំបូរណ៍",
      firstName: "ធារិទ្ធ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "ណាវិន",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហេង",
      firstName: "ស៊ូជីញ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡី",
      firstName: "ស៊ីណាត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡី",
      firstName: "ស្រីណែត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡៃ",
      firstName: "ស្រីហ្វា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អាត",
      firstName: "រតនាសុជាតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អាត",
      firstName: "សេផានៀ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហួត",
      firstName: "លីម៉េង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "កង",
      firstName: "សារ៉ាវ័ន្ត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "ជុតិមន្ត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គង់",
      firstName: "សុវ៉ាន់នី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "គុណ",
      firstName: "សុភត្រា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ង៉ែត",
      firstName: "យូអ៊ី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ចាន់",
      firstName: "សូរបញ្ញារ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឆៃ",
      firstName: "សុវណ្ណពុទ្ទិកា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឆោម",
      firstName: "លីហួរ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ជា",
      firstName: "ចិនសារុតា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "តាន់",
      firstName: "មុនីនាថ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "តុន",
      firstName: "ចាន់វីរៈ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ថេង",
      firstName: "គឹមហ័រ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ទក់",
      firstName: "សាវុធ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ទីតាំង",
      firstName: "សាន់ណា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "មុន្នីនិច្ច",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "វឿន",
      firstName: "គីមឡុង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "វិណេត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ប៊ុន",
      firstName: "ធឿន",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុនីតា",
      firstName: "បាន",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស៊ុនណាល់",
      firstName: "រិទ្ធស័គ្គ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ប្រុស",
      firstName: "ពិសី",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផក",
      firstName: "ល្យាណ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ផល",
      firstName: "សុវណ្ណ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យី",
      firstName: "សុខភាព",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "យឿត",
      firstName: "ស្រីយ៉ា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រ៉ី",
      firstName: "ស៊ាងឡេង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រិទ្ធ",
      firstName: "ថាណា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រិទ្ធ",
      firstName: "ចន្រ្ទា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រិន",
      firstName: "ម៉េងហេង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "រី",
      firstName: "សុផាណិត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លី",
      firstName: "ម៉េងហួរ",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "លឹម",
      firstName: "ប៉េងសួរ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "វាយោ",
      firstName: "ភក្តី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ស",
      firstName: "ស្រីនាត",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សុខុម",
      firstName: "មន្នីរតនា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សួង",
      firstName: "កញ្ញា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សេង",
      firstName: "រ៉ានុន",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "សោម",
      firstName: "សៀវហេង",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហាក់",
      firstName: "សុធី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហុក",
      firstName: "វិមានទេពី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហុង",
      firstName: "ម៉ារ៉ាតី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ហឿន",
      firstName: "មករាស៊ីត្រា",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡាយ",
      firstName: "អ៊ីឈីង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡេង",
      firstName: "សុខលាង",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡេង",
      firstName: "សុខលី",
      gender: "ស",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អ៊ិត",
      firstName: "រក្សា",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "អេង",
      firstName: "រ៉ានុត",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "មាន",
      firstName: "ប៊ុនស័ក្តិ",
      gender: "ប",
      grade: 5,
    });
    await col.insertOne({
      lastName: "ឡុង",
      firstName: "ស្រីលីន",
      gender: "ស",
      grade: 5,
    });

    // Grade 6
    await col.insertOne({
      lastName: "ក្រិម",
      firstName: "ណាវិន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ខុន",
      firstName: "សុខបញ្ញា",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឃិត",
      firstName: "លីហ្សា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ចាប",
      firstName: "សុជា",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ជុំ",
      firstName: "អារីយ៉ា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ជួន",
      firstName: "សុនិរ័ន្ត",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ដាវុធ",
      firstName: "រតនា",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឌឿន",
      firstName: "ឌីណា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ណាន",
      firstName: "សៀវម៉ី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ណេ",
      firstName: "ស្រីនីន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "តុម",
      firstName: "ស៊ីណា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ធាំ",
      firstName: "គីមមួយ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ធឿន",
      firstName: "សុខហេង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ប៉ុក",
      firstName: "ពុធ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ធ្វា",
      firstName: "ប៉ៅ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រ៉ាវី",
      firstName: "ផូ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "តុងហួរ",
      firstName: "ពេជ្រ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "នីសា",
      firstName: "ភក្តី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ភារុណ",
      firstName: "ភាន់",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុផាន់ណា",
      firstName: "ម៉ាប់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សីហា",
      firstName: "ម៉ៅ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីសា",
      firstName: "យន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីល័ក្ខ",
      firstName: "យ៉េន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បញ្ញាពេជ្រ",
      firstName: "រិន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីណុច",
      firstName: "លី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ចំរ៉ុង",
      firstName: "លីន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "មុនិរាជ្យ",
      firstName: "លឿង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវណ្ណមណី",
      firstName: "វ៉េង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉េងហុង",
      firstName: "វុទ្ធី",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីជីញ",
      firstName: "ស",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ាមនីកា",
      firstName: "ស៊ង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស័ក្កគីរីរាជ្យ",
      firstName: "ស៊ន់",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉េងស៊ាង",
      firstName: "សា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឆេងហួ",
      firstName: "សិទ្ធ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខវណ្ណ",
      firstName: "សិទ្ធ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ការី",
      firstName: "សុខ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុផានិត",
      firstName: "សឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុមាន",
      firstName: "ស្រើយ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុផានិច",
      firstName: "ហួ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "យូហុង",
      firstName: "ហឿម",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុឡេង",
      firstName: "ហៀង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សេងហូង",
      firstName: "ហៃ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សៀវឈិញ",
      firstName: "ឡាក់",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុម៉ាវត្តី",
      firstName: "ឡោ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "នីតា",
      firstName: "អឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខខេង",
      firstName: "ស៊ឹប",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុម៉ាលី",
      firstName: "ចាន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវណ្ណារិទ្ធ",
      firstName: "ជុន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឡៃហេង",
      firstName: "ឈាង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លិកស៊ីង",
      firstName: "ឈូ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អាទិត្យមន្នី",
      firstName: "ណុច",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វិសាល",
      firstName: "ណូ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វិសិដ្ឋ",
      firstName: "ណូ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "នរាជ",
      firstName: "ថន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីនីន",
      firstName: "ទីន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "គីមហេង",
      firstName: "ធា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សៀវអ៊ី",
      firstName: "ធឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ដាវណ្ណ",
      firstName: "នូ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វល័ក្ខវីរះបុត្រ",
      firstName: "បុរី",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីលាភ",
      firstName: "ប្រាក់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "កក្ដដា",
      firstName: "ម៉ន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សៀវម៉ី",
      firstName: "ម៉ាញ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ហ៊ុនយូស៊ី",
      firstName: "ម៉េង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រស្មី",
      firstName: "ម៉ៃ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវិសាល",
      firstName: "រ៉ា",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ធីតា",
      firstName: "រ៉ាត់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហេង",
      firstName: "រ៉ូនី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "យ៉ារីដា",
      firstName: "រិន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សំបាន",
      firstName: "រុន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ពិសី",
      firstName: "រ័ត្នថា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លក្ខណា",
      firstName: "លី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីតា",
      firstName: "លីន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រជ្ជចណា",
      firstName: "វ៉ាន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រជ្ជបុត្រ",
      firstName: "វី",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ួយិន",
      firstName: "ស៊ុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុផាន់ណា",
      firstName: "សុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីណុច",
      firstName: "សឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហុង",
      firstName: "សៀង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខលក្ខណា",
      firstName: "សំ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវ៉ាន់នី",
      firstName: "ហៀប",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហ្សា",
      firstName: "ហេង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ុយអ័",
      firstName: "ហោ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អ៊ីស៊ីង",
      firstName: "ឡាយ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឆេងអ៊ី",
      firstName: "ឡេង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សាខន្និម៉ា",
      firstName: "អេង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ច័ន្ទមរកត",
      firstName: "កៀត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉ីអ៊ីញ",
      firstName: "គាវ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អនុរ័ក្ខ",
      firstName: "គិត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ចាន់ណា",
      firstName: "ចិន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ផៃផាន់ណា",
      firstName: "ចិន្ដា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ផានកុម្ភ:",
      firstName: "ចេន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឆាលី",
      firstName: "ឆេត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉ៃជីន",
      firstName: "ឈុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អាម៉ាណា",
      firstName: "ឌិត",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុជាតា",
      firstName: "ណន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "មករា",
      firstName: "ធី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខផាន់ណា",
      firstName: "នី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ផារ័ត្ន",
      firstName: "នេន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ាវម៉ី",
      firstName: "ប៉ាន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ច័ន្ទវឌ្ឍនៈ",
      firstName: "ផាន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វិច្ចរ៉ា",
      firstName: "ពេជ្រ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខធារ៉ា",
      firstName: "ពៅ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុបញ្ញា",
      firstName: "ភាព",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុភ័ក្ត",
      firstName: "មាស",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វិច្ឆិកា",
      firstName: "ម៉ៃ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ធានស៊ិញ",
      firstName: "មឿន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុនីតា",
      firstName: "មឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ប៉ូលី",
      firstName: "យិន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ីណា",
      firstName: "យឺ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវណ្ណារ័ត្ន",
      firstName: "រ៉ឹម",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បូណា",
      firstName: "រិទ្ធ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីម៉េងធាន",
      firstName: "រិទ្ធី",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បញ្ញា",
      firstName: "លន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បញ្ញា",
      firstName: "សុខ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ផានិកា",
      firstName: "សុង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុជាតា",
      firstName: "សុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អាយ៉ូ",
      firstName: "សុផាន់ណា",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហ្សា",
      firstName: "សៀត",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ដាលីន",
      firstName: "សៀម",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "មានហេង",
      firstName: "ស្រេង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សោមា",
      firstName: "សំណាក់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ចារ:សុធម្មនេត",
      firstName: "ហ៊ាង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហាវ",
      firstName: "ហ៊ាង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "គីមយ៉ាង",
      firstName: "ហុង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស៊ីវឡេង",
      firstName: "ហុង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីទីង",
      firstName: "ហេង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "មនោរីម៉ា",
      firstName: "ឡឹក",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វល័ក្ខ",
      firstName: "អ៊ុំ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ចំរើន",
      firstName: "អឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ច័ន្ទសីហា",
      firstName: "ភ័ក្រ្ក",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លក្ខិណា",
      firstName: "ហឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុវណ្ណបញ្ញា",
      firstName: "ឈាន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉ានិច",
      firstName: "សំណាង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីភ័ក្រ",
      firstName: "ភឿង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "កងមុន្នីរចនា",
      firstName: "រិទ្ធិ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ស្រីឡែន",
      firstName: "ខូន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រចន្នី",
      firstName: "គង់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សេងសុខណា",
      firstName: "គឹម",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុភី",
      firstName: "ឃុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ណាឃៀង",
      firstName: "ឃឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហ្សា",
      firstName: "ង៉ុយ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុភ័ក្រភួង",
      firstName: "ចៀន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខហេង",
      firstName: "ឆើត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វ៉ាន់ទី",
      firstName: "ឆៃ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុណា",
      firstName: "ឈឿន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "អាឡិចសាន់ស្កាយ",
      firstName: "តិច",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុធារ៉ានី",
      firstName: "តុន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុម៉ាវត្តី",
      firstName: "បូរិន",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ខ្វាន់ហ៊ី",
      firstName: "ភេ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខលីហ្សា",
      firstName: "ម៉េង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឡៃផេង",
      firstName: "មាឃ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុធារិទ្ធិ",
      firstName: "រួន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "លីហ៊ៀង",
      firstName: "លឹម",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "គឹមសុង",
      firstName: "សន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "នីសា",
      firstName: "សយ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ពិសិដ្ឋ",
      firstName: "សី",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ឧត្តម",
      firstName: "សុខ",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "រីសា",
      firstName: "សុង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "និត្យ",
      firstName: "សុផាន់",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ហ្គឹមស៊ុង",
      firstName: "ស",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ហាក់សេង",
      firstName: "សឿត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "យូជីន",
      firstName: "សេង",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុខនី",
      firstName: "សំ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "សុម៉ារី",
      firstName: "ហ៊ុល",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បូរ៉ា",
      firstName: "ហឿត",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "វឌ្ឍនា",
      firstName: "ហៃ",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ម៉េងហ៊ុង",
      firstName: "ឡន",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "បរម៉ី",
      firstName: "អ៊ឹង",
      gender: "ស",
      grade: 6,
    });
    await col.insertOne({
      lastName: "កៅសានហឺរ",
      firstName: "អ៊ុល",
      gender: "ប",
      grade: 6,
    });
    await col.insertOne({
      lastName: "ប៊ុនសេង",
      firstName: "នី",
      gender: "ប",
      grade: 6,
    });

    console.log("✅ All students inserted successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
