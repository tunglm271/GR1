<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;


class Workspace extends Model
{
    use HasFactory;
    protected $table = 'workspaces';

    protected $fillable = [
        "name", "description"
    ];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class,'host');
    }
    
}
