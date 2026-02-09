
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
-- CreateTable
CREATE TABLE "customers" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL

);

-- CreateTable
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "customer_id" UUID NOT NULL REFERENCES customers(id),
    "amount" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL
);

-- CreateTable
CREATE TABLE "revenue" (
    "month" VARCHAR(4) NOT NULL,
    "revenue" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL

);

-- CreateIndex
CREATE UNIQUE INDEX "revenue_month_key" ON "revenue"("month");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
