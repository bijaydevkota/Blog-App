import { db } from "@/lib/db/drizzle";
import { categoryTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";



interface ICategory {
    name: string;
    description: string;
}

export const createCategory = async (categoryData : ICategory) =>{
    try {
        const response = await db.insert(categoryTable).values(categoryData)
        return {
            succes: true,
            messege : "Category created successfully",
            data : response,
        } 
        
    } catch (error) {
        console.log(error)
        return {
            success: false,
            messege: "Failed to create category",
            error: error,
        }
    }
};


export const getAllCategory = async () =>{
    try {
        const response = await db.select().from(categoryTable);
        return {
            succes: true,
            messege : "Categories fetched successfully",
            data : response,
        } 
        
    } catch (error) {
        console.log(error)
        return {
            success: false,
            messege: "Failed to fetch categories",
            error: error,
        }
    }
};


export const getCategoryById = async (id : number) =>{
    try {
        const response = await db.select().from(categoryTable).where (eq(categoryTable.id,id));
        return {
            succes: true,
            messege : "Category by id fetched successfully",
            data : response,
        } 
    } catch (error) {
        console.log(error)
        return {
            success: false,
            messege: "Failed to fetch category by id",
            error: error,
    }
}}
;


export const updateCategoryById = async (id : number , categoryData : ICategory) =>{
    try {
        const response = await db.update(categoryTable).set(categoryData).where(eq(categoryTable.id,id));
        return {
            succes: true,
            messege : "Category updated successfully",
            data : response,
        } 
    } catch (error) {
        console.log(error)
        return {
            success: false,
            messege: "Failed to update category by id",
            error: error,
    }
    }
};


export const deleteCategory = async (id : number) =>{
    try {
        const response = await db.delete(categoryTable).where(eq(categoryTable.id,id));
        return {
            succes: true,
            messege : "Category deleted successfully",
            data : response,
        } 
    } catch (error) {
        console.log(error)
        return {
            success: false,
            messege: "Failed to delete category by id",
            error: error,
    }
    }
};
