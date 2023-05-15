<?php

namespace App\Models;

use App\Models\Visitor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ShortLink extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function getshortlinkAttribute($value)
    {

        return route('profile',['short_url' => $value]);
    }

    /**
     * Get all of the comments for the ShortLink
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function visitors()
    {
        return $this->hasMany(Visitor::class, 'short_link_id', 'id');
    }

}
