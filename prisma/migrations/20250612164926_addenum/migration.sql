/*
  Warnings:

  - You are about to alter the column `type` on the `Section` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `Section` MODIFY `type` ENUM('PRESENTATION', 'ACTIVITES', 'ACCES', 'CONSEILS', 'INFOS', 'POURQUOI') NOT NULL;
