import {
    phoneme_b, 
    phoneme_d,
    phoneme_f,
    phoneme_g,
    phoneme_h,
    phoneme_j,
    phoneme_k,
    phoneme_l,
    phoneme_m,
    phoneme_n,
    phoneme_p,
    phoneme_r,
    phoneme_s,
    phoneme_t,
    phoneme_v,
    phoneme_w,
    phoneme_y,
    phoneme_z,
    phoneme_long_z,
    phoneme_th,
    phoneme_ng,
    phoneme_sh,
    phoneme_ch,
    phoneme_zh,
    phoneme_wh,
    phoneme_short_a,
    phoneme_short_e,
    phoneme_short_i,
    phoneme_short_o,
    phoneme_short_u,
    phoneme_long_a,
    phoneme_long_e,
    phoneme_long_i,
    phoneme_long_o,
    phoneme_long_u,
    phoneme_oo,
    phoneme_ow,
    phoneme_oy,
    phoneme_short_ar,
    phoneme_long_ar,
    phoneme_ir,
    phoneme_or,
    phoneme_ur,
    phoneme_name_start_one,
    phoneme_name_start_two,
    phoneme_name_start_three,
    phoneme_name_start_four,
    phoneme_name_start_five,
    phoneme_name_start_six,
    phoneme_name_start_seven,
    phoneme_name_middle_a,
    phoneme_name_middle_o,
    phoneme_name_middle_t,
    phoneme_name_middle_i,
    phoneme_name_middle_ar,
    phoneme_name_end_one,
    phoneme_name_end_two
} from "./phonemes"

// Maybe this could be a dictionary? <number>: <array>
export const phonemeArray = [
    phoneme_b, 
    phoneme_d,
    phoneme_f,
    phoneme_g,
    phoneme_h,
    phoneme_j,
    phoneme_k,
    phoneme_l,
    phoneme_m,
    phoneme_n,
    phoneme_p,
    phoneme_r,
    phoneme_s,
    phoneme_t,
    phoneme_v,
    phoneme_w,
    phoneme_y,
    phoneme_z,
    phoneme_long_z,
    phoneme_th,
    phoneme_ng,
    phoneme_sh,
    phoneme_ch,
    phoneme_zh,
    phoneme_wh,
    phoneme_short_a,
    phoneme_short_e,
    phoneme_short_i,
    phoneme_short_o,
    phoneme_short_u,
    phoneme_long_a,
    phoneme_long_e,
    phoneme_long_i,
    phoneme_long_o,
    phoneme_long_u,
    phoneme_oo,
    phoneme_ow,
    phoneme_oy,
    phoneme_short_ar,
    phoneme_long_ar,
    phoneme_ir,
    phoneme_or,
    phoneme_ur,
    phoneme_name_start_one,
    phoneme_name_start_two,
    phoneme_name_start_three,
    phoneme_name_start_four,
    phoneme_name_start_five,
    phoneme_name_start_six,
    phoneme_name_start_seven,
    phoneme_name_middle_a,
    phoneme_name_middle_o,
    phoneme_name_middle_t,
    phoneme_name_middle_i,
    phoneme_name_middle_ar,
    phoneme_name_end_one,
    phoneme_name_end_two
]
// Could build custom phonemes that include other phonemes.

// Don't know what this name template is supposed to be... and I made it!
// I think it's just supposed to be something simple.
export const nameTemplate_1 = [
    [phoneme_name_start_two],
    [phoneme_name_middle_a],
    [phoneme_ng, phoneme_r]
]

// This is supposed to be "Darius" - at least, that's what inspired the name template.
export const nameTemplate_darius  = [
    [phoneme_name_start_one],
    [phoneme_name_middle_ar],
    [phoneme_name_end_one]
]

// The inspiration for this name template is "Porter".
export const nameTemplate_porter = [
    [phoneme_name_start_three],
    [phoneme_or],
    [phoneme_name_middle_t],
    [phoneme_ur]
]

// The inspiration for this name template is "Ryan".
export const nameTemplate_ryan = [
    [phoneme_r, phoneme_h],
    [phoneme_y],
    [phoneme_short_a, phoneme_long_a],
    [phoneme_n]
]

// The inspiration for this name template is "Timo"
export const nameTemplate_timo = [
    [phoneme_name_start_four],
    [phoneme_name_middle_i],
    [phoneme_m],
    [phoneme_short_o, phoneme_long_o]
]

// The inspiration for this name template is "Lux"
export const nameTemplate_lux = [
    [phoneme_l],
    [phoneme_short_u],
    [phoneme_z]
]

// The inspiration for this name template is "Malorie"
export const nameTemplate_malorie = [
    [phoneme_name_start_five],
    [phoneme_short_a],
    [phoneme_l],
    [phoneme_or],
    [phoneme_long_e]
]

// The inspiration for this name template is "Rylan".
export const nameTemplate_rylan = [
    [phoneme_r, phoneme_h],
    [phoneme_y],
    [phoneme_l],
    [phoneme_short_a, phoneme_long_a],
    [phoneme_n]
]

// The inspiration for this name template is "Kaitlynn"
export const nameTemplate_kaitlynn = [
    [phoneme_k, phoneme_b],
    [phoneme_long_a],
    [phoneme_t],
    [phoneme_l],
    [phoneme_y],
    [phoneme_n]
]

// The inspiration for this name template is "Sophia"
export const nameTemplate_sophia = [
    [phoneme_name_start_six],
    [phoneme_name_middle_o],
    [phoneme_f],
    [phoneme_name_end_two]
]

// The inspiration for this name template is "Carl"
export const nameTemplate_carl = [
    [phoneme_name_start_seven],
    [phoneme_short_ar],
    [phoneme_l]
]