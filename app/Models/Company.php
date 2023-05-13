<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

/**
 * @method find($id)
 * @method create(array $array)
 * @method whereId($id)
 * @method when(mixed $email, \Closure $param)
 */
class Company extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'url'
    ];

    /**
     * @var string[]
     */
    protected $appends= [
        'image'
    ];

    /**
     * @return string|null
     */
    public function getImageAttribute(): ?string
    {
        $image = $this->media()->first();
        return $image ? $image->getUrl() : null;
    }

    /**
     * @return HasMany
     */
    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }
}
