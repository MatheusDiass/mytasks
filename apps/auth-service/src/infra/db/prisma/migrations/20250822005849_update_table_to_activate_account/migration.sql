-- AlterTable
ALTER TABLE "confirmation_codes" ADD COLUMN     "is_used" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT false;
