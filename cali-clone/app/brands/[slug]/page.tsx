import { notFound } from "next/navigation";
import MastMasalaPage from "@/components/brands/MastMasalaPage";
import BrandPremiumPage from "@/components/brands/BrandPremiumPage";
import { getBrandMedia } from "@/lib/brandMedia";
import { getDoc } from "@/lib/store";
import { DEFAULT_BRANDS, findBrand } from "@/lib/brands";
import { isAdmin, isPublic } from "@/lib/adminSession";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getDoc("brands", DEFAULT_BRANDS);
  const brand = findBrand(data, slug);
  return { title: brand?.name ?? "Brand" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getDoc("brands", DEFAULT_BRANDS);
  const brand = findBrand(data, slug);

  if (!brand) notFound();
  if (!isPublic(brand) && !(await isAdmin())) notFound();

  // Brands with locally-hosted, measured media get the premium uncropped layout;
  // anything without media falls back to the original template.
  if (brand.layout !== "standard" && getBrandMedia(brand.slug).length > 0) {
    return <BrandPremiumPage data={brand} />;
  }
  return <MastMasalaPage data={brand} />;
}
