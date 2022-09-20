import { db } from "./db";

/**
 * 데이터 추가 함수
 * @param table 테이블 객체
 * @param data 추가할 데이터
 */
export const insertData = async <T>(table: string, data: T): Promise<void> => {

    return await db.transaction('rw', db[table], () => {
        db[table].add({ ...data });
    });
}

/**
 * 데이터 수정 함수
 * @param table 테이블 객체
 * @param id 대상 ID
 * @param data 수정 할 데이터
 */
export const updateData = async <T>(table: string, id: number|string, data:T): Promise<void> => {

    return await db.transaction("rw", db[table], async () => {
        const updated = await db[table]
        .update(id, { ...data, updated_at: new Date() })
        if (!updated) {
            throw new Error(`Nothing was updated - ${table} :: ${id}`);
        }
    })
}

/**
 * 데이터 삭제 함수
 * @param table 테이블 객체
 * @param id 대상 ID
 */
export const deleteData = async (table: string, id: number| string): Promise<void> => {

    return await db.transaction("rw", db[table], () => {
        db[table].delete(id);
    });
}