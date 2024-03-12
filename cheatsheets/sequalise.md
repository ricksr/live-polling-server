Generate Model:
npx sequelize-cli model:generate --name iam_user --attributes role:integer,permissions:jsonb,contact_number:string,email:string,is_active:boolean,company:string,name:string,sourcing_channel_id:integer,arn_number:string,gst_number:string,pan_number:string,referred_by:string,bank_account_number:string,bank_ifsc_code:string,bank_name:string,bank_branch:string
npx sequelize-cli model:generate --name permission --attributes access:string,is_active:boolean
npx sequelize-cli model:generate --name role --attributes permissions:jsonb,name:string,is_active:boolean

Migration:
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

Seeding:
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed:undo:all