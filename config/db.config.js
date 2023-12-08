import dotenv from 'dotenv';
dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

export const url = `mongodb+srv://${"dummyacc"}:${"MTJRrOxoKiPMxvZ1"}@${"adt-test"}.emufjmv.mongodb.net/${"adt-test"}?retryWrites=true&w=majority`;