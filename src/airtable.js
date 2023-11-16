const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const max_records = 100;

const dev_mode = import.meta.env.VITE_MODE === 'dev';

dev_mode && console.log('base id :>> ', AIRTABLE_BASE_ID)

const TableName = "Technologies";
const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TableName}?maxRecords=${max_records}&view=Grid%20view`;

dev_mode && console.log("airtable_url :>> ", AIRTABLE_URL);
dev_mode && console.log('AIRTABLE_TOKEN :>> ', AIRTABLE_TOKEN);

export async function get_all_tech_skills() {
    const response = await fetch(AIRTABLE_URL, {
        headers: {Authorization: `Bearer ${AIRTABLE_TOKEN}`},
    });

    var tech_skills = await response.json();
    dev_mode && console.log('tech skills :>> ', tech_skills)
    return tech_skills;
}

// const technical_skills = await get_all_tech_skills();
window.get_all_tech_skills = get_all_tech_skills;

// console.log("technical_skills from airtable :>> ", technical_skills);

// window.skills = technical_skills.records;
// console.log("window.skills :>> ", window.skills);

// var skills = await get_all_tech_skills();
// console.log('skills :>> ', skills);
// window.skills = skills;

/**
 * Samples from https://scottspence.com/posts/make-a-contact-form-with-sveltekit-and-airtable
 */

// const handleSubmit = async (data) => {
//   const formData = new FormData(data.currentTarget);

//   console.log(formData.get("name"));
//   console.log(formData.get("email"));
//   console.log(formData.get("message"));
// };

// export const post = async ({ request }) => {
//     const fd = await request.formData()

//     const name = fd.get('name')
//     const email = fd.get('email')
//     const message = fd.get('message')

//     console.log('name:', name)
//     console.log('email:', email)
//     console.log('message:', message)

//     return {
//       status: 200,
//       body: { message: 'success' },
//     }
//   }
