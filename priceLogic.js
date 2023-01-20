function price(item_name, item_type, max_expiry, base_price, total_qty, expiry_days)
{
    var final_price = base_price, factor = 0;
    if(total_qty > 100)
    factor = total_qty / 10000;
    factor += (max_expiry - expiry_days) / (max_expiry);
    if(factor > 0.7)
        factor = 0.7;
    final_price = base_price - (base_price * factor);
    console.log(Math.round(final_price), factor);
}

//price('Amul Butter 100g','Dairy', 270, 55, 120, 200);