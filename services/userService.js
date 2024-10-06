import { supabase } from "../lib/superbase"

export const getUserInfo = async (userId) => {
    try {
        const { data, error } = await supabase.from('users').select().eq('id', userId).single()

        if (error) {
            return {
                success: false,
                msg: error.message
            }
        }

        return {
            success: true,
            data
        }
    } catch (error) {
        console.log('Error: ', error)
        return {
            success: false,
            msg: error.message
        }
    }
}